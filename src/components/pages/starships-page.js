import React, { Component } from 'react';

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {StarshipDetails, StarshipList} from "../sw-components";

export default class StarshipsPage extends Component {
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
          side={<StarshipList onItemSelected={this.onItemSelected} />}
          main={<StarshipDetails itemId={selectedItem} />} />
      </ErrorBoundry>
    );
  }
};