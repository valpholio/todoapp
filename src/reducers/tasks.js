import {CREATE_TASK, EDIT_TASK, DO_TASK, REMOVE_TASK, GET_TASKS, GET_TASKS_FROM_STORAGE} from '../actionTypes';

/**
 * Specialized reducer that handles tasks actions.
 * @param {Object[]} state - Current state.
 * @param {Object} action - Redux action.
 */
export default function tasksReducer(state=[],action) {
    switch (action.type) {
        case CREATE_TASK: {
            const {type, ...task} = action;
            return [...state,task];
        }
        case EDIT_TASK: {
            const {type, ...task} = action;
            return state.map(item => item.id === task.id ? task: item);
        }
        case DO_TASK: {
            const {type, ...task} = action;
            return state.map(item => item.id === task.id ? Object.assign({},item,{isDone:true}): item);
        }
        case REMOVE_TASK: {
            const {id} = action;
            return state.filter(t => t.id !== id);
        }
        case GET_TASKS: {
            return  state;
        }
        case GET_TASKS_FROM_STORAGE: {
            return action.tasks ? [...action.tasks] : [];
        }
        default:
            return  state;
    }
}