import {createReducer, getType} from "typesafe-actions";
import {createPostAction, fetchPostsAction} from "../actions/PostActions";
import {CreatePostAction, FetchPostsAction, PostState} from "../actions/PostTypes";

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
