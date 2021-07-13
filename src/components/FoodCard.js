//Creates a food card component with given food data ----> name,id,image

export default function foodCard(foodData) {
  const { strMeal, idMeal, strMealThumb } = foodData;
  const resultsContainer = document.getElementById("JSsearchResultContainer");

  //Creating the card container to make it selectable.
  const resultCard = document.createElement("div");
  resultCard.setAttribute("class", "result__card");
  resultCard.addEventListener("click", handleCardClick);

  resultCard.innerHTML = ` <div id="meal-${idMeal}" class="card__fav-icon"></div>
  <img
    src="${strMealThumb}"
    alt="result 1"
    class="card__image"
  />
  <h2 class="card__heading">${strMeal}</h2>`;

  //Selecting fav icon
  const favIcon = resultCard.querySelector(`#meal-${idMeal}`);

  function handleCardClick(event) {
    //Prevent toggling favorite state when user clicks out of icon itself
    if (event.target !== favIcon) {
      toggleCardSelect(this);
    } else {
      toggleCardSelect(this);
      toggleFavMeal();
    }
  }

  function toggleFavMeal() {
    favIcon.classList.toggle(`card__fav-icon--selected`);

    ///DO SOMETHING TO ADD FAVS
  }

  function toggleCardSelect(card) {
    //only toggle class on container and not other elements inside individually
    card.classList.toggle("result__card--selected");

    //Toggle selected style on card
    //Remove selected style from other cards
    resultsContainer.querySelectorAll("DIV").forEach((element) => {
      if (
        element !== card &&
        element.classList.contains("result__card--selected")
      ) {
        element.classList.remove("result__card--selected");
      }
    });
  }

  return resultCard;
}
