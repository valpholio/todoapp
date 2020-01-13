import React from 'react';
import PropTypes from 'prop-types';

const AddTaskButton = ({
                           enterAddTaskMode = () => {}
                       }) => {
    return (
        <div onClick={enterAddTaskMode}>
            + Add Task
        </div>
    );
};

AddTaskButton.propTypes = {
    enterAddTaskMode: PropTypes.func
};

export default AddTaskButton;