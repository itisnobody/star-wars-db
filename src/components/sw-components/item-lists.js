import React from 'react';
import ItemList from "../item-list";
import { withData } from '../hoc-helpers';
import SwapiService from "../api/swapi-service";

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    );
  };
};

const renderName = item => `${item.name}`;
const renderModelAndName = item => `${item.name} (${item.model})`;

const ListWithChildren = withChildFunction(ItemList,
  item => `${item.name} (${item.birthYear})`
);

const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};