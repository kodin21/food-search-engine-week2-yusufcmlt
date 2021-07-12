//Header greeting (homepage)
//Gets user name and renders greeting message with image and search box.

import mealPlateImg from "../img/food-bowl-header.png";
import { getFoodSuggestions } from "../services/api-service";
import { debounce } from "../services/utils";

export default function headerGreet(rootHeader, userName = "Human") {
  rootHeader.innerHTML = `<div class="header__greet">
    <h1 class="header__heading">
      Hello <span class="header__heading--username">${userName}!</span>
    </h1>
    <form class="header__search-container">
      <input
        id="JSsearchInput"
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

  //Selecting search box input and adding event listener.
  const searchInput = document.getElementById("JSsearchInput");
  searchInput.addEventListener("input", debounce(handleSearch));

  //Modifying input for api
  //Hello world -----> 'hello+world'
  function modifySearch(searchInput) {
    return searchInput.toLowerCase().trim().split(" ").join("+");
  }

  //Input event
  async function handleSearch(event) {
    const { value } = event.target;
    const modifiedSearch = modifySearch(value);

    //if search box has a value -or not only empty spaces-
    if (modifiedSearch) {
      //Get search results
      const suggestionData = await getFoodSuggestions(modifiedSearch);
      const { meals } = suggestionData;
      //Check if response data has any results
      if (meals) {
        //Get only names as suggestions
        const suggestionResults = meals.map((suggestion) => suggestion.strMeal);
        //console.log(suggestionResults);
      }
    }
  }
}
