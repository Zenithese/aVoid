import { combineReducers } from 'redux';

import entities from './entities_reducer';

console.log("hit rootReducer")

const rootReducer = combineReducers({
    entities
});

export default rootReducer;