import React, { Component } from 'react';

import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../api/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

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
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className={'app container'}>
            <Header />

            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
