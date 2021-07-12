export default function foodCard(foodData) {
  const { strMeal, idMeal, strMealThumb } = foodData;

  return `<div class="result__card">
    <div id="${idMeal}" class="card__fav-icon"></div>
    <img
      src="${strMealThumb}"
      alt="result 1"
      class="card__image"
    />
    <h2 class="card__heading">${strMeal}</h2>
  </div>`;
}
