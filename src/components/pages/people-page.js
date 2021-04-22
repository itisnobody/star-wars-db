import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";

const PeoplePage = ({ history, match }) => {

  const { id } = match.params;

  return (
    <ErrorBoundry>
      <h2>People</h2>
      <Row
        side={<PersonList onItemSelected={id => history.push(id)} />}
        main={<PersonDetails itemId={id} />} />
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);