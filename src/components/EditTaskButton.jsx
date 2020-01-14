import React from 'react';
import PropTypes from 'prop-types';

const EditTaskButton = ({
                            enterEditTaskMode = () => {
                            }, id
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