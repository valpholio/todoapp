import {CREATE_TASK, EDIT_TASK, DO_TASK, REMOVE_TASK, GET_TASKS} from '../actionTypes';

export const createTask = (title, text) => {
    return {
        type: CREATE_TASK,
        id: Date.now() + Math.random() * 1000,
        title,
        text
    }
};

export const editTask = (id, title, text) => {
    return {
        type: EDIT_TASK,
        id,
        title,
        text
    }
};

export const doTask = (id) => {
    return {
        type: DO_TASK,
        id
    }
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
};

export const getTasks = () => {
    return {
        type: GET_TASKS
    }
};

