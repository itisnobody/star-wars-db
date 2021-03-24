import React, { Component } from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../errorButton";

import './app.css';
import ErrorMessage from "../error-message";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersoneDetails from "../persone-details";
import SwapiService from "../../api/swapi-service";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      selectedPerson: 2
    };
  }

  swapiService = new SwapiService();

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  componentDidCatch() {
    this.setState({error: true});
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

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
              getData={this.swapiService.getAllPlanets}
              renderItem={ item => (<span>{item.name} ({item.population})<button>!</button></span>) } />
          </div>
          <div className={'col-md-8'}>
            <PersoneDetails
              personId={this.state.selectedPerson} />
          </div>
        </div>

      </div>
    );
  }
};
