import React, { Component } from 'react';

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component {
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
          side={<PersonList onItemSelected={this.onItemSelected} />}
          main={<PersonDetails itemId={selectedItem} />} />
      </ErrorBoundry>
    );
  }
};