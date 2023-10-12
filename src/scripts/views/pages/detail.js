import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createRestaurantReviewsTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    restaurantContainer.innerHTML += `
      <h3>Review Restaurant</h3>
      <div class="restaurant-review"></div>
    `;

    const restaurantReview = document.querySelector('.restaurant-review');
    restaurant.customerReviews.forEach((review) => {
      restaurantReview.innerHTML += createRestaurantReviewsTemplate(review);
    });
  },
};

export default Detail;