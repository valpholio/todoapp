import {ENTER_ADD_TASK_MODE, EXIT_ADD_TASK_MODE, ENTER_EDIT_TASK_MODE, EXIT_EDIT_TASK_MODE} from '../actionTypes';

export const enterAddTaskMode = () => {
    return {
        type: ENTER_ADD_TASK_MODE
    }
};

export const exitAddTaskMode = () => {
    return {
        type: EXIT_ADD_TASK_MODE
    }
};

export const enterEditTaskMode = (id) => {
    return {
        type: ENTER_EDIT_TASK_MODE,
        id
    }
};

export const exitEditTaskMode = () => {
    return {
        type: EXIT_EDIT_TASK_MODE
    }
};
