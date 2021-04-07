import React from 'react';
import ItemDetails, {Record} from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImg}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImgUrl={getPersonImg} >

              <Record field={'gender'} label={'Gender'} />
              <Record field={'birthYear'} label={'Birth Year'} />
              <Record field={'eyeColor'} label={'Eye Color'} />

            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getPlanetImg}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPlanet}
              getImgUrl={getPlanetImg} >

              <Record field={'population'} label={'Population'} />
              <Record field={'rotationPeriod'} label={'Rotation Period'} />
              <Record field={'diameter'} label={'Diameter'} />

            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImg}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getStarship}
              getImgUrl={getStarshipImg}>

              <Record field={'length'} label={'Length'} />
              <Record field={'crew'} label={'Crew'} />
              <Record field={'costInCredits'} label={'Cost'} />

            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};