import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({});

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

export default configureStore;