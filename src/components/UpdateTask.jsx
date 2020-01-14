import React, { useState } from 'react';
import PropTypes from 'prop-types';

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