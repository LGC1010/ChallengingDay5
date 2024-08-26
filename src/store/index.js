// import { configureStore } from "@reduxjs/toolkit";
// import todoSlice from "../feature/todos/todoSlice";
// const store = configureStore({
//     reducer: {
//         todos: todoSlice,
//     },
// });

import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer,
);

export default store;