import { parseHTML } from "../services/utils";

export default function createFavoriteButton() {
  const buttonMarkup = `<button id="JSfavoriteLink" class="header__favorite-link">My favorite meals</button>`;

  const buttonElement = parseHTML(buttonMarkup);

  return buttonElement;
}
