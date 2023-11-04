/* eslint-disable no-unused-vars */
import { spyOn } from 'jest-mock';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant';
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantsView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('input'));
  };

  const setSearchContainer = () => {
    view = new FavoriteRestaurantsView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = {
      getAllRestaurants: jest.fn(),
      searchRestaurants: jest.fn(),
    };

    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      favoriteRestaurants.searchRestaurants.mockImplementation(() => []);

      searchRestaurants('restaurant 1');

      expect(presenter.latestQuery).toEqual('restaurant 1');
    });

    it('should ask the model to search for liked restaurants', () => {
      favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
      searchRestaurants('restaurant 1');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restaurant 1');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant__item').length).toEqual(3);

          done();
        });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restoran a') {
          return [
            { id: 111, name: 'restoran abc' },
            { id: 222, name: 'ada juga restoran abcde' },
            { id: 333, name: 'ini juga boleh restoran a' },
          ];
        }
        return [];
      });

      searchRestaurants('restoran a');
    });

    it('should show the name of the restaurants found by Favorite restaurants', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          const restaurantNames = document.querySelectorAll('.item__name');

          expect(restaurantNames.item(0).textContent).toEqual('restoran abc');
          expect(restaurantNames.item(1).textContent).toEqual('ada juga restoran abcde');
          expect(restaurantNames.item(2).textContent).toEqual('ini juga boleh restoran a');

          done();
        });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restoran a') {
          return [
            { id: 111, name: 'restoran abc' },
            { id: 222, name: 'ada juga restoran abcde' },
            { id: 333, name: 'ini juga boleh restoran a' },
          ];
        }

        return [];
      });

      searchRestaurants('restoran a');
    });

    it('should show - when the restaurant returned does not contain a name', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          const restaurantNames = document.querySelectorAll('.item__name');

          expect(restaurantNames.item(0).textContent).toEqual('-');

          done();
        });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restoran a') {
          return [
            { id: 444 },
          ];
        }

        return [];
      });

      searchRestaurants('restoran a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);

      searchRestaurants('    ');
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.emptyLists').length).toEqual(1);
          done();
        });
      favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);
      searchRestaurants('restoran a');
    });

    it('should not show any restaurant', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant__item').length).toEqual(0);
          done();
        });
      favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);
      searchRestaurants('restoran a');
    });
  });
});