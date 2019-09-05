import {createAction} from "typesafe-actions";
import {Post} from "../../components/Posts";
import {PostActionTypes} from "./Types";

export interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS,
    payload: Post[],
}

export const fetchPostsAction = createAction(PostActionTypes.FETCH_POSTS, action => {
    return (posts: Post[]) => action(posts);
});

export interface CreatePostAction {
    type: PostActionTypes.CREATE_POST,
    payload: Post,
}

export const createPostAction = createAction(PostActionTypes.CREATE_POST, action => {
    return (post: Post) => action(post);
});



