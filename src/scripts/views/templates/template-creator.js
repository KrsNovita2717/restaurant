import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__name section__heading" tabindex="0">${restaurant.name}</h2>
    <div class="restaurant__info">
      <div class="restaurant__poster">
        <img width="640" height="360" class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="image__poster">
      </div>
      <div clas="info__body">
        <h3 tabindex="0">Detail Restaurant</h3>
        <h4>Alamat: </h4>
        <p>${restaurant.address}, Kota ${restaurant.city}</p>
        <h4>Rating: </h4>
        <p><i class="fa-solid fa-star"></i> ${restaurant.rating}/5</p>
      </div>
    </div>
    <div class="restaurant__menus">
        <h3 tabindex="0">Daftar Menu</h3>
        <div class="menu-category">
        <div id="menu-foods">
          <h4>Makanan:</h4>
          <ul class="menu-list">
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>
        <div id="menu-drinks">
          <h4>Minuman:</h4>
          <ul class="menu-list">
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    <div class="restaurant__overview">
      <h3 tabindex="0">Overview Restaurant</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__reviews">
      <h3 tabindex="0">Review Restaurant</h3>
      <div class="reviews__list"></div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant__item">
    <div class="item__heading">
      <div class="item__label">
        <p class="label__text">Kota ${restaurant.city || '-'} <span><i class="fa-solid fa-star"></i> ${restaurant.rating || '-'}</span></p>
      </div>
      <img width="640" height="360" data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name || '-'}" class="item__image lazyload">
    </div>
    <div class="item__overview">
      <h3 class="item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p class="item__desc">${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createRestaurantReviewsTemplate = (reviews) => `
  <div class="review">
    <div class="review__heading">
      <p>${reviews.name}<span class="date">${reviews.date}</span></p>
    </div>
    <div class="review__content">
    <p>${reviews.review}</p>
    </div>
  </div>
`;

const createFormReviews = () => `
  <div class="review__form">
    <h3 tabindex="0">Silahkan tinggalkan ulasan</h3>
    <form id="addReview">
      <label for="name">Nama:</label>
      <input type="text" name="name" id="name" placeholder="Masukan Nama Anda" required>
      <label for="review__text">Ulasan:</label>
      <textarea name="review__text" id="review__text" placeholder="Masukan Ulasan Anda" required></textarea>
      <button type="submit">Kirim Ulasan</button>
    </form>
  </div>
`;

const createFavoriteMovieButtonTemplate = () => `
<button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteMovieButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="unfavoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoader = () => `
  <div id="loader">
    <div class="loader__message">
      <i class="fa-solid fa-spinner fa-spin-pulse"></i>
      <p>Loading</p>
    </div>
  </div>
`;

const createErrorPage = () => `
  <div class="error-page">
    <h2 class="error-page__title">Oops! Something went wrong.</h2>
    <p class="error-page__message">We're sorry, but an error occurred while fetching data.</p>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewsTemplate,
  createFavoriteMovieButtonTemplate,
  createUnfavoriteMovieButtonTemplate,
  createFormReviews,
  createLoader,
  createErrorPage,
};