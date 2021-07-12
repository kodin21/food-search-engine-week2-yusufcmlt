//Header greeting (homepage)
//Gets user name and renders greeting message with image and search box.

import mealPlateImg from "../img/food-bowl-header.png";

export default function headerGreet(rootHeader, userName = "Human") {
  rootHeader.innerHTML = `<div class="header__greet">
    <h1 class="header__heading">
      Merhaba <span class="header__heading--username">${userName}</span>
    </h1>
    <form class="header__search-container">
      <input
        type="text"
        placeholder="Search for the meal on your mind. "
        class="header__search-input"
      />

      <button class="header__search-submit" />
    </form>
  </div>
  <div class="header__image-container">
    <img
      src="${mealPlateImg}"
      alt="food plate"
      class="header__image"
    />
  </div>`;
}
