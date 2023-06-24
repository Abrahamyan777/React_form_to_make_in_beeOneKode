import { combineReducers, createStore } from "redux";
import { usersReducer } from "./redusers/usersReducers";



export const store = createStore(combineReducers({
    usersReducer
}))