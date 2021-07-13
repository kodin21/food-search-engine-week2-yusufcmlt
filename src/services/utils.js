function debounce(func, delay = 750) {
  let timeoutID;

  //Return function for input event.
  return (...args) => {
    //Function to run after if latest timeout finishes without getting removed.
    const timeoutFunc = () => {
      //console.log("Ending--->", timeoutID);
      timeoutID = null;
      func(...args);
    };
    //console.log("Clearing--->", timeoutID);
    clearTimeout(timeoutID);

    //Set a new timeout if user continues typing
    timeoutID = setTimeout(timeoutFunc, delay);
    //console.log("Creating--->", timeoutID);
  };
}

//Get latest localStorage data.
//I don't know if its good or bad performance wise.(Getting data everytime)
function getLocalData() {
  const data = window.localStorage.getItem("favorites");
  if (data) {
    return JSON.parse(data);
  } else return [];
}

//Functions directly use an array inside localStorage with key 'favorites'

//Add item with data.
function addLocalFavItem(item) {
  let favData = getLocalData();
  favData.push(item);
  window.localStorage.setItem("favorites", JSON.stringify(favData));
}

//Remove item with given id
function removeLocalFavItem(itemID) {
  let favData = getLocalData();
  favData = favData.filter((favItem) => favItem.idMeal !== itemID);
  window.localStorage.setItem("favorites", JSON.stringify(favData));
}

//Checking if item already exists in array.
//Returns boolean
function checkLocalFavItemExists(itemID) {
  let favData = getLocalData();
  return favData.findIndex((favItem) => favItem.idMeal === itemID) > -1;
}

export {
  debounce,
  getLocalData,
  addLocalFavItem,
  removeLocalFavItem,
  checkLocalFavItemExists,
};
