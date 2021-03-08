import { createStore } from "redux";
import thunk from "redux-thunk";
import cakeReducer from "../Reducers/cakeReducer";
import { applyMiddleware } from "redux";
import rootReducer from "../Reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
