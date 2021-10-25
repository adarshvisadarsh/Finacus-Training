import  { createContext } from "react";

const cartcontext = createContext({
  items: [],
  totalamount: 0,
  additem: (item) => {},
  removeitem: (id) => {},
});

export default cartcontext;
