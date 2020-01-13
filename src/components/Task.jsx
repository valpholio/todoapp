import React from 'react';
import PropTypes from 'prop-types';

const Task = ({id, title, text, isDone}) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>{text}</div>
            <div>completed: {isDone ? 'y' : 'n'}</div>
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