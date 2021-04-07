import React, {Component} from "react";

import "./item-details.css";
import ErrorButton from "../errorButton";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      img: null
    };
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImgUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          img: getImgUrl(item)
        });
      });
  }

  render() {
    const {item, img} = this.state;

    if (!item) {
      return <span>Select a person from a list</span>
    }

    return (
      <div className={'random-planet jumbotron rounded'}>
        <img className={'planet-img'}
             src={img} alt=""/>
        <div>
          <h4>{item.name}</h4>
          <ul className={'list-group list-group-flush'}>
            {
              React.Children.map(this.props.children, child => {
                return React.cloneElement(child,{item});
              })
            }
          </ul>
        </div>
      </div>
    );
  }
};

const Record = ({ item, field, label }) => {
  return (
    <li className={'list-group-item'}>
      <span className={'term'}>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};