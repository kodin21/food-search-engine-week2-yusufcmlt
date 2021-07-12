import "regenerator-runtime/runtime";
import elementCreator from "./src/components/ElementCreator";
import headerGreet from "./src/components/HeaderGreet";
import Loading from "./src/components/Loading";
import { getUserName, getFoodData } from "./src/services/api-service";

//Selecting elements

const headerElement = document.getElementById("JSheader"); //header inside body   ==> search will be inside and results will be inserted after.

//Render loading element on first load.
Loading(headerElement);

//Get User data and remove loading
//Added 1 second just for showing loading animation because it gets data fast.
setTimeout(() => {
  getUserName().then((data) => {
    headerGreet(headerElement, data.name);
  });
}, 1000);
