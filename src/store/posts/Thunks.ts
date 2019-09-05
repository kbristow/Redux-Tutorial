import {Dispatch} from "redux";
import {createPostAction, fetchPostsAction} from "./Actions";
import {Post} from "../../components/Posts";

export const fetchPosts = () => async (dispatch: Dispatch): Promise<void> => {
    console.log("Hello");

    const result = await fetch('https://jsonplaceholder.typicode.com/posts');

    const jsonResult = await result.json();

    dispatch(fetchPostsAction(jsonResult));
};
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
