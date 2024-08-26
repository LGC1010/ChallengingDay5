import { combineReducers } from "redux";
import todos from "../feature/todos/todo";

const rootReducer = combineReducers({
    todos,
});

export default rootReducer;