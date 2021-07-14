import { parseHTML } from "../services/utils";

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

  return formElement;
}
