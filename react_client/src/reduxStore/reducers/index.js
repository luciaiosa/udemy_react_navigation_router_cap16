import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  // formReducer debe asignarse a una variable que se llame form SIEMPRE!!!
  form: formReducer
});
