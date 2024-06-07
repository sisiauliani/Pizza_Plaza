/* eslint-disable no-new */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoView from './liked-resto/favorite-resto-view';
import FavoriteRestoShowPresenter from './liked-resto/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-resto/favorite-resto-search-presenter';

const view = new FavoriteRestoView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
  },
};

export default Favorite;
