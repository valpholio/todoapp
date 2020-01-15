import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button to delete task.
 * @param {NumberLike} id - Id of the task to be deleted.
 * @param {function} removeTask - Event handler, called on click on the button. Emits redux action to delete the task.
 */
const RemoveTaskButton = ({id, removeTask = () => {}}) => {
    return (
            <button onClick={() => removeTask(id)} className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-remove"></span> Remove
            </button>
    );
};

RemoveTaskButton.propTypes = {
    id: PropTypes.any.isRequired,
    removeTask: PropTypes.func
};

export default RemoveTaskButton;
