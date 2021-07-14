import { parseHTML } from "../services/utils";

export default function createMealCard(cardData) {
  const { strMeal, idMeal, strMealThumb } = cardData;

  const cardMarkup = `<div id="meal-${idMeal}" class="result__card">
      <div class="card__fav-icon"></div>
      <img
        src="${strMealThumb}"
        alt="result 1"
        class="card__image"
      />
      <h2 class="card__heading">${strMeal}</h2>
    </div>`;
  const cardElement = parseHTML(cardMarkup);

  return cardElement;
}
