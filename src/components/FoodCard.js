//Creates a food card component with given food data ----> name,id,image
//Checks if meal is in favorite list

import {
  addLocalFavItem,
  checkLocalFavItemExists,
  removeLocalFavItem,
} from "../services/utils";

export default function foodCard(foodData) {
  const { strMeal, idMeal, strMealThumb } = foodData;
  const resultsContainer = document.getElementById("JSsearchResultContainer");

  //Creating the card container to make it selectable.
  const resultCard = document.createElement("div");
  resultCard.setAttribute("class", "result__card");

  //Click event on food card
  resultCard.addEventListener("click", handleCardClick);

  //Filling inside container with data.
  resultCard.innerHTML = ` <div id="meal-${idMeal}" class="card__fav-icon"></div>
  <img
    src="${strMealThumb}"
    alt="result 1"
    class="card__image"
  />
  <h2 class="card__heading">${strMeal}</h2>`;

  //Selecting fav icon
  const favIcon = resultCard.querySelector(`#meal-${idMeal}`);

  //if card is in favorite list, change favorite icon
  if (checkLocalFavItemExists(idMeal)) {
    favIcon.classList.add("card__fav-icon--selected");
  }

  //Clicking event on a card.
  //Checking the intention of the click ==> focus on card or add into favorites.
  function handleCardClick(event) {
    //Prevent toggling favorite state when user clicks out of favorite icon itself
    if (event.target !== favIcon) {
      toggleCardSelect(this);
    } else {
      toggleCardSelect(this);
      toggleFavMeal();
    }
  }

  //Clicking card's favorite icon
  //Adding item into localStorage 'favorite' data
  function toggleFavMeal() {
    //Toggling heart icon state
    favIcon.classList.toggle(`card__fav-icon--selected`);
    //Check if item is already in the list.
    if (!checkLocalFavItemExists(idMeal)) {
      addLocalFavItem({ strMeal, idMeal, strMealThumb });
    } else {
      removeLocalFavItem(idMeal);
    }
  }

  //Focusing on card
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
