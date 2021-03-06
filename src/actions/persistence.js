import {GET_TASKS_FROM_STORAGE,PUSH_TASKS_IN_STORAGE} from '../actionTypes';

const STORAGE_KEY = 'TODO_APP_TASKS';

/**
 * Retrieves task list from local storage.
 */
export const getTasksFromStorage = () => {
    let tasks = localStorage.getItem(STORAGE_KEY);
    if (tasks === 'undefined') {
        tasks = [];
    }
    else {
        tasks = JSON.parse(tasks);
    }
    return {
        type: GET_TASKS_FROM_STORAGE,
        tasks
    }
};

/**
 * Places task list to local storage.
 * @param {Object[]} tasks - Tasks that will replace current task list in local storage.
 */
export const pushTasksInStorage = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return {
        type: PUSH_TASKS_IN_STORAGE
    }
};
