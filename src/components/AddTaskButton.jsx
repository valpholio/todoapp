import React from 'react';
import PropTypes from 'prop-types';

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