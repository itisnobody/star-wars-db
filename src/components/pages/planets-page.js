import React, { Component } from 'react';

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";

export default class PlanetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    }
  }

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  }

  render() {
    const {selectedItem} = this.state;

    return (
      <ErrorBoundry>
        <Row
          side={<PlanetList onItemSelected={this.onItemSelected} />}
          main={<PlanetDetails itemId={selectedItem} />} />
      </ErrorBoundry>
    );
  }
};