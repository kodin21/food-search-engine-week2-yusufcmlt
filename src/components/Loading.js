//This component is for showing a placeholder while getting/rendering any data.
//Just for visuals, has no functional purpose
//Styles in style.css

import loadingIcon from "../img/icons/pizza-loading.svg";

function Loading(insertedRoot) {
  insertedRoot.innerHTML = `<div class="loading">
  <img
    src="${loadingIcon}"
    alt="loading icon"
    class="loading__icon"
  />
  <h2 class="loading__text">Loading...</h3>
      </div>
  `;
}

export default Loading;
