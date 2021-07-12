import "regenerator-runtime/runtime";
import headerWrapper from "./src/components/HeaderWrapper";
import Loading from "./src/components/Loading";
import { getUserName, getFoodData } from "./src/services/api-service";

//Selecting elements
const headerElement = document.getElementById("JSheader"); //header inside body   ==> search will be inside and results will be inserted after.

//Render loading element on first load. ---> inserts into header element
Loading(headerElement);

const randomUserID = Math.floor(Math.random() * 10) + 1; //Random user id every time document loads (user id  1-10)

//Get User data and remove loading --->inserts into header element
//Added 600ms timeout just for showing loading animation because it gets data fast and you can't see the loading.
setTimeout(() => {
  getUserName(randomUserID)
    .then((data) => {
      headerWrapper(headerElement, data.name);
    })
    .catch(() => {
      headerWrapper(headerElement);
    });
}, 600);
