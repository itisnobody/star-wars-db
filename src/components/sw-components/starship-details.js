import React from 'react';

import { withSwapiService } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details";

const StarshipDetails = props => {
  console.log(props.itemId);
  return (
    <ItemDetails {...props}>

      <Record field={'length'} label={'Length'} />
      <Record field={'crew'} label={'Crew'} />
      <Record field={'costInCredits'} label={'Cost'} />

    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImgUrl: swapiService.getStarshipImg
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
