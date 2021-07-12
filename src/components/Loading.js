//This component is for showing a placeholder while getting/rendering any data.
//Just for visuals, has no functional purpose

import elementCreator from "./ElementCreator";
import loadingIcon from "../img/icons/pizza-loading.svg";

//Styles in style.css

function Loading() {
  const loadingElement = elementCreator("div", { class: "loading" });

  loadingElement.innerHTML = `<img
 src="${loadingIcon}"
 alt="loading icon"
 class="loading__icon"
/>
<h2 class="loading__text">Yükleniyor...</h3>`;

  return loadingElement;
}

export default Loading;
