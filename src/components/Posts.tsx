import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../store/posts/Thunks";
import {ApplicationState} from "../store";

class Posts extends Component<PostsProps> {

    public render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }

    public async componentWillMount(): Promise<void> {
        await this.props.fetchPosts();
    }

    public componentWillReceiveProps(nextProps: Readonly<PostsProps>, nextContext: any): void {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
}

export interface PostsProps {
    fetchPosts: () => Promise<void>,
    posts: Post[],
    newPost?: Post,
}

export interface Post {
    id?: string,
    title: string,
    body: string,
}

const mapStateToProps = (state: ApplicationState) => ({
    posts: state.posts.items,
    newPost: state.posts.item,
});

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
