import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (data) => `
    <h1 tabindex="0">Detail Restaurant</h1>
    <div class="resto__contentResto">
        <div class="resto__description">
            <h2 class="restaurant__name" tabindex="0">${data.restaurant.name}</h2>
            <div class="resto__sub-description">
                <img tabindex="0" class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${data.restaurant.pictureId}" alt="${data.restaurant.name}" crossorigin="anonymous"/>
                <p tabindex="0">${data.restaurant.description}</p>
            </div>
        </div>
        <div class="resto__item">
            <div class="resto__descriptionResto">
                <h2 tabindex="0">Information</h2>
                <div class="resto__information">
                    <strong tabindex="0">City:</strong>
                    <p tabindex="0"> ${data.restaurant.city}</p>
                    <strong tabindex="0">Address:</strong>
                    <p tabindex="0"> ${data.restaurant.address}</p>
                    <strong tabindex="0">Rating:</strong>
                    <p tabindex="0"> ${data.restaurant.rating}</p>
                    <strong tabindex="0">Category:</strong>
                </div>
                <div class="resto__categories">
                    <ul>
                        ${data.restaurant.categories.map((category) => `<li tabindex="0"><i class="fas fa-circle" style="font-size: 8px; margin-right: 20px"></i>${category.name}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="resto__menuResto">
                <h2 tabindex="0">List Menu</h2>
                <div class="resto__menu">
                    <div class="resto__foods">
                        <h3 tabindex="0">Foods</h3>
                        <ul>
                            ${data.restaurant.menus.foods.map((food) => `<li tabindex="0"><i class="fas fa-circle" style="font-size: 8px; margin-right: 20px"></i>${food.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="resto__drinks">
                        <h3 tabindex="0">Drinks</h3>
                        <ul>
                            ${data.restaurant.menus.drinks.map((drink) => `<li tabindex="0"><i class="fas fa-circle" style="font-size: 8px; margin-right: 20px"></i>${drink.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="resto__reviewsResto">
            <h2 tabindex="0">Customer Reviews</h2>
            <ul>
                ${data.restaurant.customerReviews.map((review) => `
                    <li tabindex="0">
                        <strong tabindex="0"><i class="fa-solid fa-user-large" style="font-size: 20px; margin-right: 10px"></i>${review.name}</strong>
                        <small tabindex="0">${review.date}</small>
                        <p tabindex="0">${review.review}</p>
                    </li>
                    </br>
                `).join('')}
            </ul>

            <form id="inputReview">
                <input tabindex="0" name="name" placeholder="Input Name" required></input>
                <textarea tabindex="0" name="review" placeholder="Input Review" required></textarea>
                <button tabindex="0" type="submit">Submit</button>
            </form>
        </div>
    </div>
`;

const createRestoItemTemplate = (restaurant) => `
    <div class="resto-item">
        <img tabindex="0" class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name || '-'}" crossorigin="anonymous"/>
        <div class="cityContent">
            <h3>${restaurant.city || '-'}</h3>
        </div>
        <h2 tabindex="0">Rating: ${restaurant.rating || '-'}</h2>
        <h1 class="restaurant__name" tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h1>
        <p tabindex="0">${restaurant.description || '-'}</p>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
