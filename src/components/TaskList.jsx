import React from 'react';
import Task from './Task.jsx';
import UpdateTask from './UpdateTask.jsx';
import EditTaskButton from './EditTaskButton.jsx';
import RemoveTaskButton from './RemoveTaskButton.jsx';
import CompleteTaskButton from './CompleteTaskButton.jsx';

const TaskList = ({edit:id, tasks})  => (<ul>{
    tasks.map((task) =>
        <li key={task.id}>
            {task.id===id? <UpdateTask/> : (<div><Task {...task}></Task><CompleteTaskButton></CompleteTaskButton><EditTaskButton></EditTaskButton><RemoveTaskButton></RemoveTaskButton></div>)}
        </li>)
}</ul>);

export default TaskList;