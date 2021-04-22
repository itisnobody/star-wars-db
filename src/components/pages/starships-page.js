import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {StarshipDetails, StarshipList} from "../sw-components";

const StarshipsPage = ({history, match}) => {

  const { id } = match.params;

  return (
    <ErrorBoundry>
      <h2>Starships</h2>
      <Row
        side={<StarshipList onItemSelected={(id) => history.push(id)} />}
        main={<StarshipDetails itemId={id} />} />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipsPage);