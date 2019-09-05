import {applyMiddleware, compose, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {ApplicationState, createRootReducer} from "./store";

export default function configureStore(initialState: ApplicationState): Store<ApplicationState> {
    const middleware = [thunk];

    return createStore(
        createRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        ));
}
