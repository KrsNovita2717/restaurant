/* eslint-disable no-new */
import FavoriteRestaurantsView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-show-presenter';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantsView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been favorited', () => {
    it('should render the information that no restaurants have been favorited', () => {
      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.emptyLists').length).toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite movies exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant__item').length).toEqual(2);

        done();
      });

      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => [
          {
            id: 11,
            name: 'A',
          },
          {
            id: 22,
            name: 'B',
          },
        ]),
      };

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});