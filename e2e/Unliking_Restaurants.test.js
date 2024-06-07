/* eslint-disable no-undef */
const assert = require('assert');

Feature('Uniking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
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
  const unlikeRestoName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestoName, unlikeRestoName);

  I.seeElement('.restaurant__name a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});
