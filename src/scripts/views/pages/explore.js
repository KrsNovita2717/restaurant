import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
      <section id="explore">
        <h2 class="section__heading">Explore Page</h2>
        <div id="restaurants" class="restaurants__list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Explore;
