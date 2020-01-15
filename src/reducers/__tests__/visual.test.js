import visualReducer from '../visual';
import {ENTER_ADD_TASK_MODE, EXIT_ADD_TASK_MODE, ENTER_EDIT_TASK_MODE, EXIT_EDIT_TASK_MODE} from '../../actionTypes';

describe('Visual reducer', () => {
    it('should enter add task mode', () => {
        const state = {};
        const update = {isAddTaskMode: true};
        const newState = visualReducer(state, {
            type: ENTER_ADD_TASK_MODE
        });
        expect(newState.toString()).toEqual(update.toString());
    });

    it('should exit add task mode', () => {
        const state = {};
        const update = {isAddTaskMode: false};
        const newState = visualReducer(state, {
            type: EXIT_ADD_TASK_MODE
        });
        expect(newState.toString()).toEqual(update.toString());
    });

    it('should enter edit task mode', () => {
        const state = {};
        const update = {isEditTaskMode: true, editTaskId: '1'};
        const newState = visualReducer(state, {
            type: ENTER_EDIT_TASK_MODE,
            id: '1'
        });
        expect(newState.toString()).toEqual(update.toString());
    });

    it('should exit edit task mode', () => {
        const state = {};
        const update = {isEditTaskMode: false};
        const newState = visualReducer(state, {
            type: ENTER_EDIT_TASK_MODE
        });
        expect(newState.toString()).toEqual(update.toString());
    });
});