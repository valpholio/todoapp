import {CREATE_TASK, EDIT_TASK, DO_TASK, REMOVE_TASK, GET_TASKS} from '../actionTypes';

/**
 * Creates create task action. Generates random id for the task.
 * @param {string} title - Title of the new task.
 * @param {string} text - Text of the new task.
 */
export const createTask = (title, text) => {
    return {
        type: CREATE_TASK,
        id: Date.now() + Math.random() * 1000,
        title,
        text
    }
};

/**
 * Creates edit task action.
 * @param {string} id - Id of the task.
 * @param {string} title - Title of the task.
 * @param {string} text - Text of the task.
 */
export const editTask = (id, title, text) => {
    return {
        type: EDIT_TASK,
        id,
        title,
        text
    }
};

/**
 * Creates do task action.
 * @param {string} id - Id of the task.
 */
export const doTask = (id) => {
    return {
        type: DO_TASK,
        id
    }
};

/**
 * Creates remove task action.
 * @param {string} id - Id of the task.
 */
export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
};

/**
 * Creates get tasks action.
 */
export const getTasks = () => {
    return {
        type: GET_TASKS
    }
};
