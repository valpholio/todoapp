import {ENTER_ADD_TASK_MODE, EXIT_ADD_TASK_MODE, ENTER_EDIT_TASK_MODE, EXIT_EDIT_TASK_MODE} from '../actionTypes';

/**
 * Specialized reducer that handles actions for updating visual elements.
 * @param {Object} state - Current state.
 * @param {Object} action - Redux action.
 */
export default function visualReducer(state = {isAddTaskMode: false, isEditTaskMode: false, editTaskId: ''}, action) {
    switch (action.type) {
        case ENTER_ADD_TASK_MODE: {
            return {...state, ...{isAddTaskMode: true}};
        }
        case EXIT_ADD_TASK_MODE: {
            return {...state, ...{isAddTaskMode: false}};
        }
        case ENTER_EDIT_TASK_MODE: {
            return {...state, ...{isEditTaskMode: true, editTaskId: action.id}};
        }
        case EXIT_EDIT_TASK_MODE: {
            return {...state, ...{isAddTaskMode: false, editTaskId: ''}};
        }
        default:
            return state;
    }
}