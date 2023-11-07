import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import skillsReducer from './reducers/skillsReducer';
import postsReucer from './reducers/postsReucer';

const rootReducer = combineReducers({
    skills: skillsReducer,
    posts: postsReucer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);