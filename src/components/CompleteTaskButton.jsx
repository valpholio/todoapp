import React from 'react';
import PropTypes from 'prop-types';

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