import React, {Component} from 'react';
import ItemList from "../item-list";
import PersoneDetails from "../persone-details";
import ErrorMessage from "../error-message";
import SwapiService from "../../api/swapi-service";
import Row from "../row";

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      selectedItem: null
    }
  }

  swapiService = new SwapiService();

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`} />
    );

    const personDetails = (
      <PersoneDetails personId={this.state.selectedItem} />
    );

    return (
      <Row side={itemList} main={personDetails} />
    );
  }
}