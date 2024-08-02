export const createElement = (tag, props = {}, children = []) => {
    const element = document.createElement(tag);
    Object.keys(props).forEach((key) => {
      element[key] = props[key];
    });
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
    return element;
  };
  
  export const appendToBody = (element) => {
    document.body.appendChild(element);
  };
  