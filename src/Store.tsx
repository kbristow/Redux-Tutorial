import {applyMiddleware, compose, createStore, DeepPartial} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {PostState} from "./actions/PostTypes";

const initialState: DeepPartial<{ posts: PostState }> = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;
