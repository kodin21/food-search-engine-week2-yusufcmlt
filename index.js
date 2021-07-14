import "regenerator-runtime/runtime";
import createHeader from "./src/components/header";

import { getUser } from "./src/services/api-service";
import { fuzzySearch } from "./src/services/utils";

//Ana elemanlarin secimesi (Header ve Sonuc bolumu)
const headerElement = document.getElementById("JSheader");
const resultsSection = document.getElementById("JSsearchResults");

//Rastgele bir user id olustur
const randomUserID = Math.floor(Math.random() * 10) + 1;

const loadApp = async () => {
  //Kullaniciyi getir
  const userData = await getUser(randomUserID);

  //Gelen kullanici ismi ile headeri olustur.
  createHeader(userData.name);
  //Header olusturulduktan sonra sayfa icerigi header tarafindan yonetilir.
};

//Sayfa yuklenme durumunda headeri getir.
window.addEventListener("DOMContentLoaded", loadApp);
