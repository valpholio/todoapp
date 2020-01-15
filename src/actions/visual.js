import {ENTER_ADD_TASK_MODE, EXIT_ADD_TASK_MODE, ENTER_EDIT_TASK_MODE, EXIT_EDIT_TASK_MODE} from '../actionTypes';

/**
 * Creates enter add task mode action.
 */
export const enterAddTaskMode = () => {
    return {
        type: ENTER_ADD_TASK_MODE
    }
};

/**
 * Creates exit add task mode action.
 */
export const exitAddTaskMode = () => {
    return {
        type: EXIT_ADD_TASK_MODE
    }
};

/**
 * Creates enter edit task mode action.
 */
export const enterEditTaskMode = (id) => {
    return {
        type: ENTER_EDIT_TASK_MODE,
        id
    }
};

/**
 * Creates exit edit task mode action.
 */
export const exitEditTaskMode = () => {
    return {
        type: EXIT_EDIT_TASK_MODE
    }
};
