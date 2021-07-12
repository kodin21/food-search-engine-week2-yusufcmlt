//Search suggestions with given suggestion array.

import searchResultsWrapper from "./SearchResultsWrapper";

//Inserts right after search box that contained by form
let suggestionsList = document.getElementById("JSsuggestionsList");
document.addEventListener("click", handleCloseDropdown);

function createSuggestionsList(suggestionRoot, suggestionItems) {
  if (suggestionsList) {
    removeSuggestionsList();
  }

  suggestionsList = document.createElement("ul");
  suggestionsList.setAttribute(
    "class",
    "search__suggestions search__suggestions--active"
  );
  suggestionsList.setAttribute("id", "JSsuggestionsList");

  //Create a suggestion list component using given suggestion data
  suggestionItems.forEach((item) => {
    suggestionsList.innerHTML += `<li class="suggestion">${item}</li>`;
  });
  //Add a click event to every suggestion list element.
  suggestionsList.querySelectorAll("li").forEach((listElement) => {
    listElement.addEventListener("click", handleSuggestionClick);
  });

  suggestionRoot.appendChild(suggestionsList);
}

//Remove suggestion box
function removeSuggestionsList() {
  if (suggestionsList) {
    suggestionsList.remove();
  }
}

//Close dropdown suggestions box on clicking anywhere but the box itself
function handleCloseDropdown(event) {
  if (suggestionsList && event.target !== suggestionsList) {
    removeSuggestionsList();
  }
}

function handleSuggestionClick(event) {
  removeSuggestionsList();
  const { textContent } = event.target;

  searchResultsWrapper(textContent);
}

export { createSuggestionsList, removeSuggestionsList };
