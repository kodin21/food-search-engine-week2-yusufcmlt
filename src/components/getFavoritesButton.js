import { parseHTML } from "../services/utils";

//Favorileri getir butonu.
//Arama cubugundan hemen sonra eklenir
export default function createFavoriteButton() {
  const buttonMarkup = `<button id="JSfavoriteLink" class="header__favorite-link">Favori yemeklerim</button>`;

  const buttonElement = parseHTML(buttonMarkup);

  return buttonElement;
}
