import React from 'react';
import PropTypes from 'prop-types';

const RemoveTaskButton = ({removeTask = () => {}, id}) => {
    return (
        <div onClick={() => removeTask(id)}>
            Delete
        </div>
    );
};

RemoveTaskButton.propTypes = {
    id: PropTypes.any.isRequired,
    removeTask: PropTypes.func
};

export default RemoveTaskButton;