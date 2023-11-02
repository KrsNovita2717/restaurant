/* eslint-disable no-shadow */
import { createFavoriteMovieButtonTemplate, createUnfavoriteMovieButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderUnfavorite();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteMovieButtonTemplate();

    this._setFavoriteButtonClickHandler();
  },

  _renderUnfavorite() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteMovieButtonTemplate();

    this._setUnfavoriteButtonClickHandler();
  },

  _setFavoriteButtonClickHandler() {
    const favoriteButton = this._favoriteButtonContainer.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      favoriteButton.classList.add('favorite');
      this._renderButton();
    });
  },

  _setUnfavoriteButtonClickHandler() {
    const favoriteButton = this._favoriteButtonContainer.querySelector('#unfavoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;