import {getTasksFromStorage, pushTasksInStorage} from '../persistence';
import {GET_TASKS_FROM_STORAGE,PUSH_TASKS_IN_STORAGE} from '../../actionTypes';

describe('Persistence actions', () => {
    it('get tasks from storage', () => {
        const tasks = [{id:'1', title: 'title', text: 'text'},{id:'2', title: 'title', text: 'text', isDone:true}];
        jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() =>JSON.stringify(tasks));
        const action = getTasksFromStorage();
        const check = {
            type: GET_TASKS_FROM_STORAGE,
            tasks
        };

        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('push tasks into storage', () => {
        jest.spyOn(Storage.prototype, 'setItem');
        const action = pushTasksInStorage();
        const check = {
            type: PUSH_TASKS_IN_STORAGE
        };

        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });
});
