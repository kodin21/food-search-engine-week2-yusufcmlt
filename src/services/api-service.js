import axios from "axios";

const USER_API_URL = "https://jsonplaceholder.typicode.com/users/";
const MEAL_API_URL = "www.themealdb.com/api/json/v1/1/search.php?s=";

//Verilen user id ile kullanici ismi getir.
const getUser = async (userID) => {
  const userData = await axios.get(`${USER_API_URL}${userID}`);
  return userData.data;
};

export { getUser };
