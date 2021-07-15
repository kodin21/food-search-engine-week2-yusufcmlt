import { fuzzySearch } from "../services/api-service";
import { debounce, parseHTML } from "../services/utils";
import createSearchResult from "./searchResults";

import createSuggestionList, {
  removeSuggestionList,
} from "./searchSuggestions";

export default function createSearchForm() {
  //Formun genel markupu
  const formMarkup = `
  <form class="header__search-container">
    <input
      required
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
  //Arama form submit durumunda sonuclari renderla
  formElement.addEventListener("submit", handleSubmitSearch);
  searchInput.addEventListener("input", debounce(handleGetSuggestions));

  //Arama kutusunda girilen terimlere gore oneri getirilmesi
  async function handleGetSuggestions(event) {
    const searchTerm = event.target.value;
    if (checkSearchTerm(searchTerm)) {
      //yemek listesinde fuzzy arama yap (sonuc limiti:5 yemek)
      fuzzySearch(searchTerm, 5).then((mealList) => {
        //Gelen oneri listesiyle arama kutusu altinda oneri kutusu olustur.
        formElement.appendChild(createSuggestionList(mealList));
      });
    } else {
      //Bos arama veya silinme durumunda onerileri bosalt
      formElement.appendChild(createSuggestionList([]));
    }
  }

  //Arama kutusunun gonderilmesi durumu.
  //Fuzzy searchden gelen bilgilerin sonuc sayfasinda render edilmesi.
  function handleSubmitSearch(event) {
    event.preventDefault();
    const searchTerm = searchInput.value;

    if (checkSearchTerm(searchTerm)) {
      //Yemek listesinde arama (sonuc limiti:15 yemek)
      fuzzySearch(searchTerm, 15).then((mealList) => {
        createSearchResult(mealList);
        //oneri listesini ve arama terimini kaldir.
        searchInput.value = "";
        removeSuggestionList();
      });
    }
  }

  return formElement;
}

//Gonderilen arama kelimesinin bos veya sadece space karakterinden olusup olusmadiginin kontrolu
//Boolean
const checkSearchTerm = (searchTerm) => {
  searchTerm = searchTerm.trim();
  return !!searchTerm;
};
