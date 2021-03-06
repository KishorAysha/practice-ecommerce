import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
const initialStore = {
  cartReducer: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
  },
};

const composeEnhencers = composeWithDevTools({});
export const store = createStore(rootReducer, initialStore, composeEnhencers());
