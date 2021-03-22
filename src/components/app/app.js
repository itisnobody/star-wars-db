import React, { Component } from 'react';

import Header from "../header";
// import ItemList from '../item-list';
// import PersoneDetails from "../persone-details";
// import PlanetDetails from "../planet-details";
// import StarshipDetails from "../starship-details";
import RandomPlanet from "../random-planet";
import ErrorButton from "../errorButton";

import './app.css';
import ErrorMessage from "../error-message";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersoneDetails from "../persone-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      selectedPerson: 2,
      selectedPlanet: null,
      selectedStarshp: null
    };


    // this.onItemSelected = id => {
    //   // console.log('selected id: ' + id);
    //   this.setState({
    //     selectedPerson: id
    //   });
    // };
  }

  swapiService = new SwapiService();

  onItemSelected = id => {
    // console.log('selected id: ' + id);
    this.setState({
      selectedPerson: id
    });
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Component did catch');
    this.setState({error:true});
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    // const {selectedPerson, selectedPlanet, selectedStarshp} = this.state;

    return (
      <div className={'app container'}>
        <Header />
        <RandomPlanet />
        <div className={'row col-12 mb-3 button-row'}>
          <ErrorButton />
        </div>
        <PeoplePage />

        <div className={'row mb-2'}>
          <div className={'col-md-4'}>
            <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPlanets}/>
          </div>
          <div className={'col-md-8'}>
            <PersoneDetails
              personId={this.state.selectedPerson}
              />
          </div>
        </div>

        {/*<div className={'row mb-2'}>*/}
        {/*  <div className={'col-md-4'}>*/}
        {/*    <ItemList onItemSelected={this.onItemSelected}/>*/}
        {/*  </div>*/}
        {/*  <div className={'col-md-8'}>*/}
        {/*    <PersoneDetails personId={selectedPerson}/>*/}
        {/*    <PlanetDetails selectedPlanet={selectedPlanet}/>*/}
        {/*    <StarshipDetails selectedStarshp={selectedStarshp}/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  }
};
