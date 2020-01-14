import React from 'react';
import PropTypes from 'prop-types';

const RemoveTaskButton = ({removeTask = () => {}, id}) => {
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