import {combineReducers} from 'redux';
import tasksReducer from './tasks'
import visualReducer from './visual'

/**
 * Combines specialized reducers.
 * @param {Object} reducers - Parts of the redux store with corresponding reducers.
 */
const appReducer = combineReducers({
    tasks: tasksReducer,
    visual:visualReducer
});

export default appReducer
