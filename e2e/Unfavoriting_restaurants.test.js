/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const assert = require('assert');

Feature('Unfavoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unfavoriting one restaurants', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.item__name a');
  const firstRestaurant = locate('.item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const favoritedRestaurantName = await I.grabTextFrom('.item__name');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  I.click(firstRestaurant);
  I.seeElement('#unfavoriteButton');
  I.click('#unfavoriteButton');

  I.amOnPage('/#/favorite');
  I.dontSee(firstRestaurantName);
});
