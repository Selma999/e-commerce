import { combineReducers } from "redux";
import catalogReducer from "./Catalog";
import commonReducer from "./Common";
import footerReducer from "./Footer";
import headerReducer from "./Header";
import loginReducer from "./Login";
import paymentReducer from "./Payment";
import productReducer from "./Product";
import cartReducer from "./Cart";
import categoriesReducer from "./Categories";

const rootReducer = combineReducers({
  header: headerReducer,
  login: loginReducer,
  footer: footerReducer,
  common: commonReducer,
  product: productReducer,
  catalog: catalogReducer,
  payment: paymentReducer,
  cart: cartReducer,
  categories: categoriesReducer,
});

export default rootReducer;
