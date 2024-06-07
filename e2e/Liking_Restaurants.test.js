/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');

  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');
  const firstResto = locate('.restaurant__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__name a').at(i));

    I.seeElement('#likeButton');
    I.click('#likeButton');

    names.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(names.length, visibleLikedResto);

  const searchQuery = names[0].substring(1, 2);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  I.waitForElement('.resto-item', 10);

  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);
  const visibleSearchedLikedResto = await I.grabNumberOfVisibleElements('.resto-item');

  assert.strictEqual(matchingRestaurants.length, visibleSearchedLikedResto);

  for (let i = 0; i < matchingRestaurants.length; i++) {
    const visibleName = await I.grabTextFrom(locate('.restaurant__name').at(i + 1));

    assert.strictEqual(matchingRestaurants[i], visibleName);
  }
});
