import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__details">
    <h2 class="restaurant__name section__heading">${restaurant.name}</h2>
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="restaurant__poster">
    <div class="restaurant__info">
      <h3>Detail Restaurant</h3>
      <h4>Alamat: </h4>
      <p>${restaurant.address}, Kota ${restaurant.city}</p>
      <h4>Rating: </h4>
      <p><i class="fa-solid fa-star"></i> ${restaurant.rating}/5</p>
    </div>
    <div class="restaurant__menus">
        <h3>Daftar Menu</h3>
        <div class="menu-category">
          <h4>Makanan:</h4>
          <ul class="menu-list">
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="menu-category">
          <h4>Minuman:</h4>
          <ul class="menu-list">
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    <div class="restaurant__overview">
      <h3>Overview Restaurant</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__reviews">
      <h3>Review Restaurant</h3>
      <div class="reviews__list"></div>
      <button id="add-review-button">Tambah Review</button>
      <div class="review__form">
        <form id="addReview">
          <label for="name">Nama:</label>
          <input type="text" name="name" id="name" placeholder="Masukan Nama Anda" required>
          <label for="review__text">Ulasan:</label>
          <textarea name="review__text" id="review__text" placeholder="Masukan Ulasan Anda" required></textarea>
          <button type="submit">Kirim Ulasan</button>
        </form>
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant__item">
    <div class="item__heading">
      <div class="item__label">
        <p class="label__text">Kota ${restaurant.city} <span><i class="fa-solid fa-star"></i> ${restaurant.rating}</span></p>
      </div>
      <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}" class="item__image">
    </div>
    <div class="item__overview">
      <h3 class="item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="item__desc">${restaurant.description}</p>
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

// createFormReviews = () => `

// `;

const createLikeButtonTemplate = () => `
<button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
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
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoader,
  createErrorPage,
};