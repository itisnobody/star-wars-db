import React, {Component} from "react";
import SwapiService from "../../api/swapi-service";
import ErrorButton from "../errorButton";

export default class PersoneDetails extends Component {

  swapiService = new SwapiService();

  constructor(props) {
    super(props);
    this.state = {
      person: null
    };
  }

  // componentDidMount() {
  //   this.updatePerson();
  // }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({person})
      })
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.person

    return (
      <div className={'random-planet jumbotron rounded'}>
        <img className={'planet-img'}
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
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