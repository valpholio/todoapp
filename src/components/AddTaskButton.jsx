import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button to open create task form.
 * @param {function} enterAddTaskMode - Event handler, called on click on the button. Emits redux action to inform subscribed containers that add task mode should be turned on.
 */
const AddTaskButton = ({
                           enterAddTaskMode = () => {}
                       }) => {
    return (
            <button onClick={enterAddTaskMode} className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-plus"></span> Add Task
            </button>
    );
};

AddTaskButton.propTypes = {
    enterAddTaskMode: PropTypes.func
};

export default AddTaskButton;
