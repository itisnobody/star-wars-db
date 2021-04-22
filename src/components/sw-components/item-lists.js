import ItemList from "../item-list";
import { withData, withSwapiService, withChildFunction } from '../hoc-helpers';

const renderName = item => `${item.name}`;

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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                      withData(withChildFunction(renderName)(
                        ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                      withData(withChildFunction(renderName)(
                        ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                      withData(withChildFunction(renderName)(
                        ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList
};