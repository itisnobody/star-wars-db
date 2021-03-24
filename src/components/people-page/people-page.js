import React, {Component} from 'react';
import ItemList from "../item-list";
import PersoneDetails from "../persone-details";
import ErrorMessage from "../error-message";
import SwapiService from "../../api/swapi-service";

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

    return (
      <div className={'row mb-2'}>
        <div className={'col-md-4'}>
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`} />
        </div>
        <div className={'col-md-8'}>
          <PersoneDetails personId={this.state.selectedItem}/>
        </div>
      </div>
    );
  }
}