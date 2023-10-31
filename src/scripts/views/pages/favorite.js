import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import { createEmptyPage, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section id="favorite">
        <h2 class="section__heading">Your Favorite Restaurant</h2>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteContainer = document.querySelector('#favorite');

    if (restaurants.length === 0) {
      favoriteContainer.innerHTML += createEmptyPage();
    } else {
      const restaurantsContainer = document.createElement('div');
      restaurantsContainer.id = 'restaurants';
      restaurantsContainer.classList.add('restaurants__list');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      favoriteContainer.appendChild(restaurantsContainer);
    }
  },
};

export default Favorite;