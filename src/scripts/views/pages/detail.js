import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FormReviewHandler from '../../utils/form-review-handler';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import {
  createFormReviews,
  createRestaurantDetailTemplate,
  createRestaurantReviewsTemplate,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';

const Detail = {
  async render() {
    return `
    <section id="detail">
      <div id="restaurant" class="restaurant__details"></div>
      <div id="favoriteButtonContainer"></div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewContainer = document.querySelector('.restaurant__reviews');
    reviewContainer.insertAdjacentHTML('beforeend', createFormReviews());
    FormReviewHandler.init({
      formElement: document.querySelector('form'),
      id: url.id,
      reviewSubmittedCallback: () => {
        this.afterRender();
        window.location.reload();
      },
    });

    const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer');
    FavoriteButtonPresenter.init({
      favoriteButtonContainer,
      favoriteRestaurants: FavoriteRestaurantIdb,
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
      restaurantReview.insertAdjacentHTML('beforeend', createRestaurantReviewsTemplate(review));
    });
  },
};

export default Detail;
