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
      <p><i class="fa-solid fa-star"></i> ${restaurant.rating}</p>
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
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewsTemplate,
};