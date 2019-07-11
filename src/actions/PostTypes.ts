import {Post} from "../components/Posts";

export enum PostActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    NEW_POST = "NEW_POST"
}

export interface PostState {
    items: Post[],
    item?: Post,
}

export interface FetchPostsAction {
    type: "FETCH_POSTS",
    payload: Post[],
}

export interface CreatePostAction {
    type: "NEW_POST",
    payload: Post,
}
