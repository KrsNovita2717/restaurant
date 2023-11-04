import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async exploreRestaurant() {
    const response = await fetch(API_ENDPOINT.EXPLORE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const urlFecth = API_ENDPOINT.DETAIL(id);
    const response = await fetch(urlFecth);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async sendReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    console.log('data hasil', response);
    return responseJson;
  }
}

export default RestaurantSource;