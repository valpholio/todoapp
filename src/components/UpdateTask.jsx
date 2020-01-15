import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Form to create|edit task. Contains Title and Text input fields, Save and Cancel buttons.
 * @param {function} createTask - Part of event handler, that is called on click on Save button, when task id is absent. Emits redux action to create a new task.
 * @param {function} exitAddTaskMode - Part of event handler, that is called on click on Save button, when task id is absent. Informs subscribers that add task mode should be turned off.
 * @param {function} editTask - Part of event handler, that is called on click on Save button, when task id is present. Emits redux action to edit the task.
 * @param {function} exitEditTaskMode - Part of event handler, that is called on click on Save button, when task id is present. Informs subscribers that edit task mode should be turned off.
 * @param {NumberLike=} id - Id of the task.
 * @param {string} title - Title of the task.
 * @param {string} text - Text of the task.
 */
const UpdateTask = ({createTask, exitAddTaskMode,editTask, exitEditTaskMode, ...task}) => {
    const [title, setTitle] = useState(task.title ||'');
    const [text, setText] = useState(task.text ||'');

    const createHandler = () => {
        createTask(title,text);
        exitAddTaskMode();
    };
    const editHandler = () => {
        editTask(task.id, title, text);
        exitEditTaskMode();
    };

    const handler = task.id? editHandler: createHandler;
    return (
        <div>
            <div>
            Title:<br/>
            <input type='text' value={title} onChange={e=>setTitle(e.target.value)} className='form-control' />
                <br/>
            Text:<br/>
            <textarea name='text' rows='5' value={text} onChange={e=>setText(e.target.value)} className='form-control' ></textarea>
            </div>
            <button onClick={handler} disabled={!(title && text)} className='btn btn-default' >Save</button>
            <button onClick={task.id? exitEditTaskMode: exitAddTaskMode} className='btn btn-default'>Cancel</button>
        </div>
    );
};

UpdateTask.propTypes = {
    createTask: PropTypes.func,
    exitAddTaskMode: PropTypes.func,
    editTask: PropTypes.func,
    exitEditTaskMode: PropTypes.func,
};

export default UpdateTask;
