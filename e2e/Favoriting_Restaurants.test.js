/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const assert = require('assert');

Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.empty-list__message');
});

Scenario('favoriting one restaurants', async ({ I }) => {
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
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.empty-list__message');

  I.amOnPage('/');

  I.seeElement('.item__name a');

  const names = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.item__name a').at(i));

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    names.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const visibleFavorited = await I.grabNumberOfVisibleElements('.item__name');
  assert.strictEqual(names.length, visibleFavorited);

  const searchQuery = names[1].substring(1, 3);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);
  const visibleSearched = await I.grabNumberOfVisibleElements('.item__name');

  assert.strictEqual(matchingRestaurants.length, visibleSearched);

  for (let i = 1; i < matchingRestaurants.length; i++) {
    const visibleName = await I.grabTextFrom(locate('.item__name').at(i + 1));

    assert.strictEqual(matchingRestaurants[i], visibleName);
  }
});
