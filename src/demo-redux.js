import { createStore } from "redux";
import { status, sort } from "./actions/index";
import reducer from "./reducers/index";

let store  = createStore(reducer);

console.log(store.getState());

// Action change status
store.dispatch(status());
console.log(store.getState());

// Action sort name
store.dispatch(sort({ by: "id", value: -1}));
console.log(store.getState());