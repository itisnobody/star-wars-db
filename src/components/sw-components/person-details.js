import React from 'react';

import { withSwapiService } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details";

const PersonDetails = props => {
  return (
    <ItemDetails {...props} >

      <Record field={'gender'} label={'Gender'} />
      <Record field={'birthYear'} label={'Birth Year'} />
      <Record field={'eyeColor'} label={'Eye Color'} />

    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImgUrl: swapiService.getPersonImg
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);