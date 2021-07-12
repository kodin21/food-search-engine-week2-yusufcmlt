import "regenerator-runtime/runtime";
import headerGreet from "./src/components/HeaderGreet";
import Loading from "./src/components/Loading";
import { getUserName, getFoodData } from "./src/services/api-service";

//Selecting elements

const headerElement = document.getElementById("JSheader"); //header inside body   ==> search will be inside and results will be inserted after.

//Render loading element on first load.
Loading(headerElement);

//Get User data and remove loading
//Added 1 second timeout just for showing loading animation because it gets data fast and you can't see the loading.
const randomUser = Math.floor(Math.random() * 10) + 1; //Random user every time document loads (user id  1-10)
setTimeout(() => {
  getUserName(randomUser)
    .then((data) => {
      headerGreet(headerElement, data.name);
    })
    .catch(() => {
      headerGreet(headerElement);
    });
}, 1000);
