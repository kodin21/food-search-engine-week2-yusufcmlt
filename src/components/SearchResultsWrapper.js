import loadingIcon from "../img/icons/pizza-loading.svg";
import { getFoodData } from "../services/api-service";
import foodCard from "./FoodCard";
import { clearInput } from "./HeaderWrapper";

export default function searchResultsWrapper(searchTerm = "") {
  const resultsSection = document.querySelector("SECTION");
  const headerElement = document.getElementById("JSheader");
  const searchInput = document.getElementById("JSsearchInput");

  //Clear search input if results section render
  searchInput.value = "";
  //Clear latest search results on re-render (or search)
  if (resultsSection) {
    resultsSection.remove();
  }

  //Create a search results section right after header element.
  headerElement.insertAdjacentHTML(
    "afterend",
    `<section class="search__results__section">
        <h2 id="JSsearchResultHeader" class="search__results__heading">
        </h2>
        <div id="JSsearchResultContainer" class="search__results__container">
            <div class="loading">
                <img
                    src="${loadingIcon}"
                    alt="loading icon"
                    class="loading__icon"
                />
            <h2 class="loading__text">Loading...</h3>
            </div>
        </div>
  </section>`
  );

  //Selecting elements
  const resultsHeader = document.getElementById("JSsearchResultHeader");
  const resultsContainer = document.getElementById("JSsearchResultContainer");

  //Scroll into results when section created
  resultsContainer.scrollIntoView();

  //Try to get food data then render results
  getFoodData(searchTerm)
    .then(({ meals }) => {
      //ADDING A TIMEOUT JUST FOR VISUALS BECAUSE SOMETIMES YOU CANT EVEN SEE LOADING COMPONENT.
      setTimeout(() => {
        //Create a food card component with given food data.
        if (meals) {
          const resultsHTML = meals.reduce((foodCards, meal) => {
            return (foodCards += foodCard(meal));
          }, ``);

          //Check If there are any search results exist

          resultsContainer.innerHTML = resultsHTML;
          resultsHeader.textContent = `Found ${meals.length} meal(s)`;
        } else {
          resultsContainer.innerHTML =
            '<h2 class="search__results__heading search__results__heading--error">Couldn\'t find any matches.</h2>';
        }
      }, 500);
    })
    .catch((error) => {
      console.log(error);
    });
}
