import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div id="detailResto" class="detailResto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#detailResto');
    restoContainer.innerHTML += createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
        description: resto.restaurant.description,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
