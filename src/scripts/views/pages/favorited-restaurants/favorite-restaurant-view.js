import { createRestaurantItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantsView {
  getTemplate() {
    return `
      <section id="favorite">
        <h2 class="section__heading">Your Favorite Restaurant</h2>
        <input id="query" class="search-box" type="search" placeholder="Search for a restaurant" aria-label="Search for a restaurant">

        <div id="restaurants" class="restaurants__list">
        </div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('input', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    const restaurantsContainer = document.getElementById('restaurants');
    if (restaurants.length > 0) {
      restaurantsContainer.classList.remove('emptyLists');
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      restaurantsContainer.classList.add('emptyLists');
      html = this._getEmptyListTemplate();
    }
    restaurantsContainer.innerHTML = html;
    restaurantsContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyListTemplate() {
    return `
        <div class="empty-list__message">
          Tidak ada restaurant untuk ditampilkan
        </div>
    `;
  }
}

export default FavoriteRestaurantsView;