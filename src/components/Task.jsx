import React from 'react';
import PropTypes from 'prop-types';

const Task = ({title, text, isDone}) => {
    return (
        <div>
            <h3 className='task-name'>{title}</h3>
            <div>{text}</div>
        </div>
    );
};

Task.propTypes = {
    id: PropTypes.any.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    isDone: PropTypes.bool,
};

export default Task;