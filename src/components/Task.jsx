import React from 'react';

const Task = ({id, title, text, onClick}) => {
    return (
        <div onClick={onClick}>
            <h3>{title}</h3>:<div>{text}</div>
        </div>
    );
};

export default Task;