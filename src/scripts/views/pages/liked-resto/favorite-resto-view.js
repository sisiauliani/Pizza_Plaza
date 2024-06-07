/* eslint-disable class-methods-use-this */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoView {
  getTemplate() {
    return `
      <section class="content">
        <div class="restaurant-list">
          <h2>Favorite Restaurant</h2>
          <input id="query" type="text" placeholder="Search name restaurant..." aria-label="Search by restaurant name" />
          <div id="restaurants" class="restaurants" aria-live="polite"></div>
        </div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestoTemplate() {
    return `
    <div class="resto-item__not__found">
        Tidak ada restaurant untuk ditampilkan
    </div>
    `;
  }
}

export default FavoriteRestoView;
