/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import FavoriteRestaurantSearchPresenter from './favorited-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantsView from './favorited-restaurants/favorite-restaurant-view';

const view = new FavoriteRestaurantsView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;