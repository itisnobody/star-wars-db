import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../api/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: 2
    };
  }

  swapiService = new SwapiService();

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className={'app container'}>
              <Header />

              <RandomPlanet />

              <Route path={"/"}
                     render={()=> <h2>Welcome to Star DB</h2>}
                     exact />
              <Route path={"/people"} component={PeoplePage} />
              <Route path={"/planets"} component={PlanetsPage} />
              <Route path={"/starships"} component={StarshipsPage}
                     exact />
              <Route path={"/starships/:id"}
                     render={({match, location, history})=> {
                       const {id} = match.params;
                       return <StarshipDetails itemId={id} />;
                     }} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
