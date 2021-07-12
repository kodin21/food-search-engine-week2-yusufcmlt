import axios from "axios";

const USER_API_URL = "https://jsonplaceholder.typicode.com/users/";
const MEAL_API_URL = "www.themealdb.com/api/json/v1/1/search.php?s=";

const getUserName = async (userID = "1") => {
  try {
    const userData = await axios.get(`${USER_API_URL}${userID}`);
    return userData.data;
  } catch (error) {
    console.log(error);
  }
};

const getFoodData = async () => {};

export { getUserName, getFoodData };
