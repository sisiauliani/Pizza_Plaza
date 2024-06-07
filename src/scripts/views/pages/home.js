import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant-list">
          <h2>Explore Restaurant</h2>
          <div id="restaurants" class="restaurants"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const resto = await TheRestoDbSource.homeListResto();
    const restaurantContainer = document.getElementById('restaurants');
    restaurantContainer.innerHTML = '';
    resto.forEach((restaurant) => {
      const restaurantElement = document.createElement('div');
      restaurantElement.classList.add('divRestaurant');
      restaurantElement.innerHTML += createRestoItemTemplate(restaurant);
      restaurantContainer.appendChild(restaurantElement);
    });
  },
};

export default Home;
