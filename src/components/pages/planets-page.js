import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";

const PlanetsPage = ({ history, match }) => {

  const { id } = match.params;

  return (
    <ErrorBoundry>
      <h2>Planets</h2>
      <Row
        side={<PlanetList onItemSelected={(id) => history.push(id)} />}
        main={<PlanetDetails itemId={id} />} />
    </ErrorBoundry>
  );
};

export default withRouter(PlanetsPage);