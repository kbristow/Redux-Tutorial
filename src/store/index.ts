import {combineReducers} from "redux";
import postReducer from "./posts/Reducers";
import {PostState} from "./posts/Types";

export const createRootReducer = () =>
    combineReducers({
        posts: postReducer,
    });

export interface ApplicationState {
    posts: PostState
}
