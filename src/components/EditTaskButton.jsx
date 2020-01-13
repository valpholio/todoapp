import React from 'react';
import PropTypes from 'prop-types';

const EditTaskButton = ({
                            enterEditTaskMode = () => {
                            }, id
                        }) => {
    return (
        <div onClick={() => enterEditTaskMode(id)}>
            Edit
        </div>
    );
};

EditTaskButton.propTypes = {
    id: PropTypes.any.isRequired,
    enterEditTaskMode: PropTypes.func
};

export default EditTaskButton;