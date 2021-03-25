import React, { Component } from 'react';

import './app.css';
import Header from "../header";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: 2
    };
  }

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <div className={'app container'}>
          <Header />

          <PlanetDetails itemId={8} />

          <PersonDetails itemId={11} />

          <StarshipDetails itemId={5} />

          <PersonList>
            {item => ( `${item.name} (${item.birthYear})` )}
          </PersonList>

          <PlanetList>
            {item => ( `${item.name}` )}
          </PlanetList>

          <StarshipList>
            {item => ( `${item.name}`)}
          </StarshipList>
        </div>
      </ErrorBoundry>
    );
  }
};
