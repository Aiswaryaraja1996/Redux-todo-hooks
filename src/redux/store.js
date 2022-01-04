import { createStore, applyMiddleware, compose } from "redux";
import authReducer from "../redux/authReducer";
import todoReducer from "../redux/todoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action", action);
  const value = next(action);
  console.log(value);
  console.log(store.getState());
};

const apiRequestMiddleware = (store) => (next) => (action) =>{
  if(typeof action === "function"){
    return action(store.dispatch,store.getState());
  }
  else{
    return next(action);
  }
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(loggerMiddleware,apiRequestMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
