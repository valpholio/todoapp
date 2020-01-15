import {createTask, editTask, doTask, removeTask, getTasks} from '../tasks';
import {CREATE_TASK, EDIT_TASK, DO_TASK, REMOVE_TASK, GET_TASKS} from '../../actionTypes';

describe('Tasks actions', () => {
    it('should create task', () => {
        jest.spyOn(global.Date, 'now').mockImplementation(() => 1);
        jest.spyOn(global.Math, 'random').mockImplementation(() => 1);
        const action = createTask('title','text');
        const check = {
            type: CREATE_TASK,
            id: 1001,
            title: 'title',
            text: 'text'
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('should edit task', () => {
        const action = editTask(1,'title','text');
        const check = {
            type: EDIT_TASK,
            id: 1,
            title: 'title',
            text: 'text'
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('should do task', () => {
        const action = doTask(1);
        const check = {
            type: DO_TASK,
            id: 1
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('should remove task', () => {
        const action = removeTask(1);
        const check = {
            type: REMOVE_TASK,
            id: 1
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('should get tasks', () => {
        const action = getTasks();
        const check = {
            type: GET_TASKS
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });
});
