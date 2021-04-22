import React, {Component} from "react";

import "./item-details.css";
import Spinner from "../spinner";
import ErrorMessage from "../error-message";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      item: null,
      img: null
    };
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {

      this.setState({
        error: false,
        loading: true
      });

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
          loading: false,
          item,
          img: getImgUrl(item)
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    const {item, img, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    if (!item) {
      return <span>Select from a list</span>
    }

    return (
      <div className={'item-detail jumbotron rounded'}>
        <img src={img} alt=""/>
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