import FavoriteIdb from '../data/favorite-restaurant';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    this._setLikeButtonClickHandler();
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    this._setLikedButtonClickHandler();
  },

  _setLikeButtonClickHandler() {
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.putRestaurant(this._restaurant);
      likeButton.classList.add('liked');
      this._renderButton();
    });
  },

  _setLikedButtonClickHandler() {
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;