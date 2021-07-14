import mealsList from "./mealsmin.js";
import Fuse from "fuse.js";

//Yardimci fonksiyonlar vb

//Verilen string ile element olustur.
//Olusturulan document icerisindeki ilk elementi sec. (gruplandigi surece sikinti yok)
const parseHTML = (htmlStr) => {
  const templateDoc = new DOMParser().parseFromString(htmlStr, "text/html");
  console.log(templateDoc.body.firstChild);
  return templateDoc.body.firstChild;
};

//Fuse.js ile fuzzy arama yapma
//mealsmin.js icerisinde yemek isimlerinden arama yapma

const fuse = new Fuse(mealsList, { keys: ["strMeal"] });
const fuzzySearch = (searchTerm) => {
  return fuse.search(searchTerm);
};

export { parseHTML, fuzzySearch };
