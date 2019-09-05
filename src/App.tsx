import React from 'react';
import './App.css';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import {Provider} from "react-redux";
import configureStore from "./configureStore";
import {ApplicationState} from "./store";

const initialState: ApplicationState = {
    posts: {
        items: []
    }
};


const store = configureStore(initialState);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <PostForm/>
                <hr/>
                <Posts/>
            </div>
        </Provider>
    );
};

export default App;
