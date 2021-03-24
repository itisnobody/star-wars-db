import React, {Component} from "react";

import Spinner from "../spinner";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: null
    };
  }

  componentDidMount() {
    this.props.getData()
      .then(itemList => {
        this.setState({
          itemList
        });
      });
  }

  renderItems = items => {
    return items.map(item => {
      const { id } = item;

      const label = this.props.renderItem(item);
      return (
        <li className={'list-group-item'}
            key={id}
            onClick={()=>this.props.onItemSelected(id)}>
            { label }
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const elements = this.renderItems(itemList);

    return (
      <ul className={'item-list list-group'}>
        { elements }
      </ul>
    );
  }
};