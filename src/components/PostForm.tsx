import React, {Component} from 'react';
import {connect} from "react-redux";
import {Post} from "./Posts";
import {createPost} from "../store/posts/Thunks";

class PostForm extends Component<PostFormProps> {

    public state: PostFormState = {
        title: "",
        body: "",
    };

    public render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type={"text"} name={"title"} onChange={this.onChangeTitle} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label><br/>
                        <textarea name={"body"} onChange={this.onChangeBody} value={this.state.body}/>
                    </div>
                    <br/>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>
        );
    }

    private onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[event.target.name]: event.target.value});
    };

    private onChangeBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({[event.target.name]: event.target.value});
    };

    private onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        await this.props.createPost(post);
    };
}

export interface PostFormProps {
    createPost: (post: Post) => Promise<void>
}

export interface PostFormState {
    title: string,
    body: string,
}

const mapDispatchToProps = {
    createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
