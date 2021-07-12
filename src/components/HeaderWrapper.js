//Header greeting (homepage)
//Gets user name and renders greeting message with image and search box.

import mealPlateImg from "../img/food-bowl-header.png";
import { getFoodData } from "../services/api-service";
import { debounce } from "../services/utils";
import {
  createSuggestionsList,
  removeSuggestionsList,
} from "./SearchSuggestions";

export default function headerWrapper(rootHeader, userName = "Human") {
  rootHeader.innerHTML = `<div class="header__greet">
    <h1 class="header__heading">
      Hello <span class="header__heading--username">${userName}!</span>
    </h1>
    <form id="JSformElement" class="header__search-container">
      <input
        required
        autocomplete="off"
        id="JSsearchInput"
        name="searchInput"
        type="text"
        placeholder="Search for the meal on your mind. "
        class="header__search-input"
      />

      <button class="header__search-submit" />
    </form>
  </div>
  <div class="header__image-container">
    <img
      src="${mealPlateImg}"
      alt="food plate"
      class="header__image"
    />
  </div>`;

  //Selecting search box input and form element.
  const formElement = document.getElementById("JSformElement");
  const searchInput = document.getElementById("JSsearchInput");

  //Typing in search box
  //Debounce ---->   Delay the api call until user stops typing.
  searchInput.addEventListener("input", debounce(handleSearch));
  formElement.addEventListener("submit", handleSubmit);

  //Modifying input for api
  //Hello world -----> 'hello+world'
  function modifySearch(searchInput) {
    return searchInput.toLowerCase().trim().split(" ").join("+");
  }

  //Input event
  async function handleSearch() {
    //There is only one input (search box) so we don't need select value-
    //- with event target etc.

    const modifiedSearch = modifySearch(searchInput.value);

    //if search box has a value -and not only empty spaces-
    if (modifiedSearch) {
      //Get search results
      const suggestionData = await getFoodData(modifiedSearch);
      const { meals } = suggestionData;

      //Check if response data has any results
      if (meals) {
        //Get only names as suggestions with the limit of 5 items at most
        const suggestionResults = meals
          .map((suggestion) => suggestion.strMeal)
          .slice(0, 5);

        //Create suggestion items box with given suggestion array inside given form, its position already set in style.css
        createSuggestionsList(formElement, suggestionResults);
      } else {
        //No result no box.
        removeSuggestionsList();
      }
    } else {
      //No search input no box.
      removeSuggestionsList();
    }
  }

  //Searching
  //Clicking a suggestion or typing and entering
  async function handleSubmit(event) {
    event.preventDefault();

    const modifiedSearch = modifySearch(searchInput.value);

    if (modifiedSearch) {
    } else {
      searchInput.value = "";
    }
  }
}
