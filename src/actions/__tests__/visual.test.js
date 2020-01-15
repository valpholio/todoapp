import {enterAddTaskMode, exitAddTaskMode, enterEditTaskMode, exitEditTaskMode} from '../visual';
import {ENTER_ADD_TASK_MODE, EXIT_ADD_TASK_MODE, ENTER_EDIT_TASK_MODE, EXIT_EDIT_TASK_MODE} from '../../actionTypes';

describe('Visual actions', () => {
    it('should enter add task mode', () => {
        const action = enterAddTaskMode();
        const check = {
            type: ENTER_ADD_TASK_MODE
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('should exit add task mode', () => {
        const action = exitAddTaskMode();
        const check = {
            type: EXIT_ADD_TASK_MODE
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('should enter edit task mode', () => {
        const action = enterEditTaskMode();
        const check = {
            type: ENTER_EDIT_TASK_MODE
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });

    it('should exit edit task mode', () => {
        const action = exitEditTaskMode();
        const check = {
            type: EXIT_EDIT_TASK_MODE
        };
        expect(JSON.stringify(action)).toEqual(JSON.stringify(check));
    });
});
