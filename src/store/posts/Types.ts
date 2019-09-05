import {Post} from "../../components/Posts";

export interface PostState {
    items: Post[],
    item?: Post,
}

export enum PostActionTypes {
    FETCH_POSTS = "@@posts/FETCH_POSTS",
    CREATE_POST = "@@posts/CREATE_POST"
}
