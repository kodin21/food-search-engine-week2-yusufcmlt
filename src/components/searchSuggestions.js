import { parseHTML } from "../services/utils";

/**
 * Aramaya icerigine gore getirilen onerilerin gorsellestirilmesi:
 *
 * createSuggestionList gelen listeye gore ul olusturur ve -
 * createSuggestionElement gelen liste elemanina gore olusturulan elemanlar-
 * ul icerisine eklenir.
 *
 */

export default function createSuggestionList(searchResultList) {
  const suggestionListMarkup = ` <ul class="search__suggestions"></ul>`;
  const suggestionListElement = parseHTML(suggestionListMarkup);

  //Gelen listeye gore bir liste elemani olustur
  searchResultList.forEach((listItem) => {
    suggestionListElement.appendChild(createSuggestionElement(listItem));
  });

  return suggestionListElement;
}

//Gelen oneri ismine gore liste elemani olustur
function createSuggestionElement(suggestionName) {
  const suggestionMarkup = `<li class="suggestion">${suggestionName}</li>`;
  const suggestionElement = parseHTML(suggestionMarkup);

  return suggestionElement;
}
