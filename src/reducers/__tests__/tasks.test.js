import tasksReducer from '../tasks';
import {CREATE_TASK, EDIT_TASK, DO_TASK, REMOVE_TASK, GET_TASKS, GET_TASKS_FROM_STORAGE} from '../../actionTypes';

describe('Tasks reducer', () => {
    it('should add task', () => {
        const state = [];
        const task = {id: '1', title: 'title', text: 'text'};
        const newState = tasksReducer(state, {
            type: CREATE_TASK,
            ...task
        });
        expect(JSON.stringify(newState)).toEqual(JSON.stringify([task]));
    });

    it('should edit task', () => {
        const state = [{id: '1', title: 'title', text: 'text'}];
        const task = {id: '1', title: 'new title', text: 'new text'};
        const newState = tasksReducer(state, {
            type: EDIT_TASK,
            ...task
        });
        expect(JSON.stringify(newState)).toEqual(JSON.stringify([task]));
    });

    it('do task', () => {
        const state = [{id: '1', title: 'title', text: 'text'}];
        const task = {id: '1', title: 'title', text: 'text', isDone:true};
        const newState = tasksReducer(state, {
            type: DO_TASK,
            ...state[0]
        });
        expect(JSON.stringify(newState)).toEqual(JSON.stringify([task]));
    });

    it('remove task', () => {
        const state = [{id: '1', title: 'title', text: 'text'}];
        const newState = tasksReducer(state, {
            type: REMOVE_TASK,
            id: '1'
        });
        expect(JSON.stringify(newState)).toEqual(JSON.stringify([]));
    });

    it('get tasks', () => {
        const state = [{id: '1', title: 'title', text: 'text'},{id: '2', title: 'title', text: 'text'}];
        const newState = tasksReducer(state, {
            type: GET_TASKS
        });
        expect(JSON.stringify(newState)).toEqual(JSON.stringify(state));
    });

    it('get tasks from storage', () => {
        const tasks = [{id: '1', title: 'title', text: 'text'},{id: '2', title: 'title', text: 'text'}];
        const newState = tasksReducer([], {
            type: GET_TASKS_FROM_STORAGE,
            tasks
        });
        expect(JSON.stringify(newState)).toEqual(JSON.stringify(tasks));
    });
});