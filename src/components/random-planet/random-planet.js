import React, { Component, Fragment } from "react";

import Spinner from "../spinner";
import ErrorMessage from "../error-message";
import SwapiService from "../api/swapi-service";

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 5000
  };

  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];

      if(typeof value == "number" && !isNaN(value)) {
        return null;
      }

      return new TypeError(`${componentName}: ${propName} must be number`);
    }
  };

  swapiService = new SwapiService();

  constructor(props) {
    super(props);
    this.state = {
      planet: {},
      error: false,
      loading: true
    };
  }

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      error: false,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*10+3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { error, loading, planet } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <PlanetView planet={planet}/> : null;

    return (
      <div className={'random-planet d-flex jumbotron rounded'}>
        { errorMessage }
        { spinner }
        { content }
      </div>
    );
  }
};

const PlanetView = props => {
  const { planet: {id, name, population, rotationPeriod, diameter} } = props;

  return (
    <Fragment>
      <img className={'planet-img'}
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
      <div>
        <h4>{name}</h4>
        <ul className={'list-group list-group-flush'}>
          <li className={'list-group-item'}>
            <span className={'term'}>Population</span>
            <span>{population}</span>
          </li>
          <li className={'list-group-item'}>
            <span className={'term'}>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className={'list-group-item'}>
            <span className={'term'}>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};