import React, {Component} from "react";
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

    const {name, gender, birthYear, eyeColor} = item;

    return (
      <div className={'random-planet jumbotron rounded'}>
        <img className={'planet-img'}
             src={img} alt=""/>
        <div>
          <h4>{name}</h4>
          <ul className={'list-group list-group-flush'}>
            <li className={'list-group-item'}>
              <span className={'term'}>Gender</span>
              <span>{gender}</span>
            </li>
            <li className={'list-group-item'}>
              <span className={'term'}>Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className={'list-group-item'}>
              <span className={'term'}>Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
        <ErrorButton />
      </div>
    );
  }
};