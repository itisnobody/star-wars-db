import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundry from "../error-boundry";
import { StarshipList } from "../sw-components";

const StarshipsPage = ({history}) => {
  console.log(history);
  return (
    <ErrorBoundry>
      <StarshipList
        onItemSelected={(itemId) => {
          history.push(`/starships/${itemId}`);
        }} />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipsPage);