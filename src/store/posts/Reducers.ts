import {createReducer, getType} from "typesafe-actions";
import {CreatePostAction, createPostAction, FetchPostsAction, fetchPostsAction} from "./Actions";
import {PostState} from "./Types";

const initialState: PostState = {
    items: [],
};

const postReducer = createReducer(initialState,
    {
        [getType(fetchPostsAction)]: (state: PostState, action: FetchPostsAction) => {
            return {...state, items: action.payload}
        },
        [getType(createPostAction)]: (state: PostState, action: CreatePostAction) => {
            return {...state, item: action.payload}
        },
    }
);

export default postReducer;
