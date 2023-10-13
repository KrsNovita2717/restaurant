import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate, createRestaurantReviewsTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant__details">
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    const restaurantReview = document.querySelector('.reviews__list');
    restaurant.customerReviews.forEach((review) => {
      restaurantReview.innerHTML += createRestaurantReviewsTemplate(review);
    });
  },
};

export default Detail;