import ItemList from "../item-list";
import { withData, withSwapiService, withChildFunction } from '../hoc-helpers';

const renderName = item => `${item.name}`;
const renderModelAndName = item => `${item.name} (${item.model})`;

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)
  ),
  mapPersonMethodsToProps);

const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)
  ),
  mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderModelAndName)
  ),
  mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};