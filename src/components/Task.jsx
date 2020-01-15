import React from 'react';
import PropTypes from 'prop-types';

/**
 * Representation of the task.
 * @param {string} title - Title of the task.
 * @param {string} text - Text of the task.
 */
const Task = ({title, text}) => {
    return (
        <div>
            <h3 className='task-name'>{title}</h3>
            <div>{text}</div>
        </div>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    isDone: PropTypes.bool,
};

export default Task;
