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

export { debounce };
