import React from 'react';
import PropTypes from 'prop-types';

/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Button to mark a task as done.
 * @param {NumberLike} id - Id of the task to be marked as done.
 * @param {function} doTask - Event handler, called on click on the button. Emits redux action to mark the task as done.
 */
const CompleteTaskButton = ({
                                id, doTask = () => {
    }
                            }) => {
    return (
            <button onClick={() => doTask(id)} className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-ok"></span> Mark as Done
            </button>
    );
};

CompleteTaskButton.propTypes = {
    id: PropTypes.any.isRequired,
    doTask: PropTypes.func
};

export default CompleteTaskButton;
