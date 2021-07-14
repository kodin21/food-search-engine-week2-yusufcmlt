import headerImage from "../img/food-bowl-header.png";

export default function createHeader(headerRoot, userName) {
  //Gelen bilgiyle olusturulacak header icerigi
  //Form bilgisi searchForm bileseninden gelecek.
  const headerInnerMarkup = `<div class="header__greet">
    <h1 class="header__heading">
      Merhaba <span class="header__heading--username">${userName}!</span>
    </h1>
    <form class="header__search-container">
      <input
        type="text"
        placeholder="Aklındaki yemeği ara"
        class="header__search-input"
      />

      <button class="header__search-submit" />
    </form>
  </div>
  <div class="header__image-container">
    <img
      src="${headerImage}"
      alt="food plate"
      class="header__image"
    />
  </div>`;

  //Olusturulan header icerigini verilen root icerisinde loading yerine yerlestir.
  //BURAYA SIRF LOADING BIRAZ DAHA GORUNSUN DIYE SETTIMEOUT EKLIYORUM 600ms
  setTimeout(() => {
    headerRoot.innerHTML = headerInnerMarkup;
  }, 600);
}
