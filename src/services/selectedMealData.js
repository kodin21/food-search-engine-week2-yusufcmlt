//Class kullanarak bir seyler denemece
//Burada tam ne yaptigimdan emin de degilim ama ortak bir secili yemek bilgisi olusturmaya calistim

class SelectedMeal {
  constructor() {
    this.idMeal = "";
    this.strMeal = "";
    this.strMealThumb = "";
    this.cardElement = "";
  }

  setMealData({ strMeal, strMealThumb, idMeal }, selectedElement) {
    this.idMeal = idMeal;
    this.strMeal = strMeal;
    this.strMealThumb = strMealThumb;
    this.cardElement = selectedElement;
  }

  get mealData() {
    return {
      idMeal: this.idMeal,
      strMeal: this.strMeal,
      strMealThumb: this.strMealThumb,
      cardElement: this.cardElement,
    };
  }
}

const selectedMealData = new SelectedMeal();

export { selectedMealData };
