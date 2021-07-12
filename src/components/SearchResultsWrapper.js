import loadingIcon from "../img/icons/pizza-loading.svg";
import { getFoodData } from "../services/api-service";
import foodCard from "./FoodCard";

const resultsSection = document.getElementsByTagName("SECTION");

export default function searchResultsWrapper(insertAfter, searchTerm = "") {
  //Create a search results section right after header element.
  insertAfter.insertAdjacentHTML(
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
            <h2 class="loading__text">Yükleniyor...</h3>
            </div>
        </div>
  </section>`
  );

  //Selecting elements
  const resultsHeader = document.getElementById("JSsearchResultHeader");
  const resultsContainer = document.getElementById("JSsearchResultContainer");

  //Scroll into results when section created
  //resultsSection.scrollIntoView(true);

  //Try to get food data then render results

  getFoodData(searchTerm)
    .then(({ meals }) => {
      console.log(meals);
      const resultsHTML = meals.reduce((foodCards, meal) => {
        return (foodCards += foodCard(meal));
      }, ``);
      resultsContainer.innerHTML = resultsHTML;
      resultsHeader.textContent = `Found ${meals.length} meal(s)`;
    })
    .catch((error) => {
      console.log(error);
    });
}

//Remove section if user searches a new item(food).
function removeResults() {
  if (resultsSection) {
    resultsSection.remove();
  }
}
export { removeResults };
