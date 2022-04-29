import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import menuReducer from "./menuReducer";
import searchReducer from "./searchReducer";

const headerReducer = combineReducers({
  menu: menuReducer,
  search: searchReducer,
  location: locationReducer,
});

export default headerReducer;
