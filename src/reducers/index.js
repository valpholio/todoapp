import {combineReducers} from 'redux';
import tasksReducer from './tasks'
import visualReducer from './visual'

const appReducer = combineReducers({
    tasks: tasksReducer,
    visual:visualReducer
});

export default appReducer