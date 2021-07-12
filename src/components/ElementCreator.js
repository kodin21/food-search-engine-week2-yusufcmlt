//HTML Element Creator with given arguments.
//Name:element name
//Attributes: class,id,type,name etc.

//ElementCreator('li',{''name'':'something','class':'something-else'})

const elementCreator = (name = "div", attributes = {}, textInside = "") => {
  const htmlElement = document.createElement(name);
  //Checking if attributes object has any property
  if (Object.keys(attributes).length) {
    for (let key in attributes) {
      htmlElement.setAttribute(key, attributes[key]);
    }
  }

  htmlElement.textContent = textInside;

  return htmlElement;
};
export default elementCreator;
