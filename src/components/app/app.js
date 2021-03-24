import React, { Component } from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css';
import PeoplePage from "../people-page";
import ItemDetails from "../item-details";
import SwapiService from "../../api/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: 2
    };
  }

  swapiService = new SwapiService();

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const {getPerson, getStarship, getPersonImg, getStarshipImg} = this.swapiService;
    const personDetails = (
      <ItemDetails
        itemId={5}
        getData={getPerson}
        getImgUrl={getPersonImg} />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImgUrl={getStarshipImg} />
    );

    return (
      <div className={'app container'}>
        <Header />
        {/*<RandomPlanet />*/}
        {/*<PeoplePage />*/}

        <ErrorBoundry>
          <Row
            side={personDetails}
            main={starshipDetails} />
        </ErrorBoundry>
      </div>
    );
  }
};
