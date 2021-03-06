import { combineReducers } from "redux";
import catalogReducer from "./Catalog";
import loginReducer from "./Login";
import paymentReducer from "./Payment";
import productReducer from "./Product";
import cartReducer from "./Cart";
import categoriesReducer from "./Categories";
import checkoutReducer from "./Checkout";
import searchReducer from "./Search";

const rootReducer = combineReducers({
  login: loginReducer,
  product: productReducer,
  catalog: catalogReducer,
  payment: paymentReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  checkout: checkoutReducer,
  search: searchReducer,
});

export default rootReducer;
