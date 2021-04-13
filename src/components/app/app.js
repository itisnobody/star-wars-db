import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import { LoginPage, SecretPage, PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../api/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  swapiService = new SwapiService();

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    const {isLoggedIn} = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className={'app container'}>
              <Header />

              <RandomPlanet />

              <Switch>
                <Route path={"/"}
                       render={()=> <h2>Welcome to Star DB</h2>}
                       exact />
                <Route path={"/people/:id?"} component={PeoplePage} />
                <Route path={"/planets/:id?"} component={PlanetsPage} />
                <Route path={"/starships"} component={StarshipsPage} exact />
                <Route path={"/starships/:id"}
                       render={({match})=> {
                         const {id} = match.params;
                         return <StarshipDetails itemId={id} />;
                       }} />
                <Route path={"/login"}
                       render={() => (
                         <LoginPage
                           onLogin={this.onLogin}
                           isLoggedIn={isLoggedIn}/>
                       )} />
                <Route path={"/secret"}
                       render={() => (
                         <SecretPage isLoggedIn={isLoggedIn}/>
                       )} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
