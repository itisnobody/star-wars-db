import React, { Component } from 'react';

import './app.css';
import Header from "../header";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../api/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList
} from "../sw-components";

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

            <PlanetDetails itemId={8} />

            <PersonDetails itemId={11} />

            <StarshipDetails itemId={5} />

            <PersonList />

            <PlanetList />

            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
