import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  // swapiService = new SwapiService();

  componentDidMount() {

    // const { getData } = this.props;

    this.props.getData()
      .then((itemList) => {
        this.setState({
          items: itemList
        });
      });
  }

  renderItems = items => {
    return items.map(item => {
      const { id, name } = item;

      return (
        <li className={'list-group-item'}
            key={id}
            onClick={()=>this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const { items } = this.state;

    if (!items) {
      return <Spinner />;
    }

    const elements = this.renderItems(items);
    // console.log(elements);

    return (
      <ul className={'item-list list-group'}>
        {elements}
      </ul>
    );
  }
};