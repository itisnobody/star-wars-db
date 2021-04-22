import React from 'react';

import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = mapServiceToProps => Wrapped => {
  // console.log(Wrapped);
  return props => {
    console.log(props);
    return (
      <SwapiServiceConsumer>
        {
          swapiService => {
            const serviceProps = mapServiceToProps(swapiService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  };
}

export default withSwapiService;