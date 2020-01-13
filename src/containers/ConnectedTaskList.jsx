import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Task from '../components/Task';
import ConnectedUpdateTask from '../containers/ConnectedUpdateTask';
import ConnectedCompleteTaskButton from '../containers/ConnectedCompleteTaskButton.jsx';
import ConnectedEditTaskButton from '../containers/ConnectedEditTaskButton';
import ConnectedRemoveTaskButton from '../containers/ConnectedRemoveTaskButton.jsx';

const ConnectedTaskList = ({edit:id, tasks=[]})  => (tasks.length? <ul>{
     tasks.map((task) =>
         task.id ? <li key={task.id}>
            {task.id === id? <ConnectedUpdateTask {...task}/> :
                (<div>
                    <Task {...task}/>
                    <ConnectedCompleteTaskButton id={task.id}/>
                    <ConnectedEditTaskButton id={task.id}/>
                    <ConnectedRemoveTaskButton id={task.id}/>
                </div>)}
        </li> : null)
}</ul>:null);

ConnectedTaskList.propTypes = {
    edit: PropTypes.any,
    tasks: PropTypes.array
};

const compareDesc = field => (a,b) => a[field] < b[field] ? 1: a[field] === b[field] ? 0: -1;

const mapStateToProps = (state) => {
    return {tasks:state.tasks.sort(compareDesc('title')), edit: state.visual.editTaskId};
};

export default connect(mapStateToProps)(ConnectedTaskList)
