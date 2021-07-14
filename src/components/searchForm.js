import { fuzzySearch } from "../services/api-service";
import { debounce, parseHTML } from "../services/utils";

import createSuggestionList from "./searchSuggestions";

export default function createSearchForm() {
  const formMarkup = `
  <form class="header__search-container">
    <input
      type="text"
      placeholder="Aklındaki yemeği ara"
      class="header__search-input"
    />
    <button class="header__search-submit" />
</form>`;

  //Form ici elemanlarin secimi
  const formElement = parseHTML(formMarkup);
  const searchInput = formElement.querySelector("input");
  const searchButton = formElement.querySelector("button");

  //Elemanlara event ekleme
  //Arama kismina yazma durumunda debounce uygula
  //Arama tusuna basma veya enter durumunda sonuclari renderla
  formElement.addEventListener("submit", handleSubmitSearch);
  searchInput.addEventListener("input", debounce(handleGetSuggestions));

  //Arama kutusunda girilen terimlere gore oneri getirilmesi
  async function handleGetSuggestions(event) {
    console.log(event.target.value);
    fuzzySearch(event.target.value).then((mealData) => {
      //Sadece ilk 5 oneriyi getir.
      mealData = mealData.slice(0, 5);

      formElement.appendChild(createSuggestionList(mealData));
    });
  }

  function handleSubmitSearch(event) {
    event.preventDefault();
  }

  return formElement;
}
