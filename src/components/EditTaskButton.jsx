import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button to open edit task dialog.
 * @param {NumberLike} id - Id of the task to be marked as done.
 * @param {function} enterEditTaskMode - Event handler, called on click on the button. Emits redux action to inform subscribers that edit mode should be turned on for the task.
 */
const EditTaskButton = ({
                            id, enterEditTaskMode = () => {
                            }
                        }) => {
    return (
            <button onClick={() => enterEditTaskMode(id)} className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-edit"></span> Edit
            </button>
    );
};

EditTaskButton.propTypes = {
    id: PropTypes.any.isRequired,
    enterEditTaskMode: PropTypes.func
};

export default EditTaskButton;
