import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../api/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    }
  }

  swapiService = new SwapiService();

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  }

  render() {
    const {getAllPeople, getPerson} = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={getAllPeople} >

        {item => (
          `${item.name} (${item.birthYear})`
        )}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails
        itemId={this.state.selectedItem}
        getData={getPerson}/>
    );

    return (
      <ErrorBoundry>
        <Row side={itemList} main={personDetails} />
      </ErrorBoundry>
    );
  }
}