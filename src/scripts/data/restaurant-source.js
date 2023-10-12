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
    console.log('hasil fetch detail', responseJson.restaurant);
    return responseJson.restaurant;
  }
}

export default RestaurantSource;