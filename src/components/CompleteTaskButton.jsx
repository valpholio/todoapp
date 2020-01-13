import React from 'react';
import PropTypes from 'prop-types';

const CompleteTaskButton = ({
                                id, doTask = () => {
    }
                            }) => {
    return (
        <div onClick={() => doTask(id)}>
            Complete
        </div>
    );
};

CompleteTaskButton.propTypes = {
    id: PropTypes.any.isRequired,
    doTask: PropTypes.func
};

export default CompleteTaskButton;