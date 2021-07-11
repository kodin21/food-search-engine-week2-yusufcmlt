//This component is for showing a placeholder while getting/rendering any data.
//Just for visuals, has no functional purpose

//Styles in style.css

function Loading() {
  return `<div class="loading">
    <img
      src="./src/img/icons/pizza-loading.svg"
      alt="loading icon"
      class="loading__icon"
    />
    <h2 class="loading__text">Yükleniyor...</h3>
  </div>`;
}
