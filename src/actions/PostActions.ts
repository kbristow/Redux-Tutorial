import {Dispatch} from "redux";
import {createAction} from "typesafe-actions";
import {Post} from "../components/Posts";
import {PostActionTypes} from "./PostTypes";


export const fetchPostsAction = createAction(PostActionTypes.FETCH_POSTS, action => {
    return (posts: Post[]) => action(posts);
});

export const fetchPosts = () => async (dispatch: Dispatch): Promise<void> => {
    console.log("Hello");

    const result = await fetch('https://jsonplaceholder.typicode.com/posts');

    const jsonResult = await result.json();

    dispatch(fetchPostsAction(jsonResult));
};

export const createPostAction = createAction(PostActionTypes.NEW_POST, action => {
    return (post: Post) => action(post);
});


export const createPost = (postData: Post) => async (dispatch: Dispatch): Promise<void> => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postData),
        }
    );

    const jsonResponse = await response.json();

    console.log(jsonResponse);

    dispatch(createPostAction(jsonResponse));
};
