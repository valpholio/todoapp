import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Task from '../components/Task';
import ConnectedUpdateTask from '../containers/ConnectedUpdateTask';
import ConnectedCompleteTaskButton from '../containers/ConnectedCompleteTaskButton.jsx';
import ConnectedEditTaskButton from '../containers/ConnectedEditTaskButton';
import ConnectedRemoveTaskButton from '../containers/ConnectedRemoveTaskButton.jsx';
import EmptyTaskList from '../components/EmptyTaskList.jsx';

/**
 * Task list, connected to redux store. Task are displayed in descending title order, case insensitive.
 * @param {NumberLike} id - Id of the task in the edit mode.
 * @param {Object[]} tasks - List of tasks to be displayed.
 */
const ConnectedTaskList = ({edit:id, tasks=[]})  => (tasks.length? <ul className="list-group">{
     tasks.map((task) =>
         task.id ? <li key={task.id}  className="list-group-item todo-list-group-item">
            {task.id === id? <ConnectedUpdateTask {...task}/> :
                (<div>
                    <Task {...task}/>
                    <div className='button-group'>
                        {task.isDone ? <div className="done-icon">
                                <span className="btn-lg glyphicon glyphicon-ok"></span>
                            </div>:
                        (<span>
                            <ConnectedCompleteTaskButton id={task.id}/>
                            <ConnectedEditTaskButton id={task.id}/>
                        </span>)}
                        <ConnectedRemoveTaskButton id={task.id}/>
                    </div>
                </div>)}
        </li> : null)
}</ul>:<EmptyTaskList/>);

ConnectedTaskList.propTypes = {
    edit: PropTypes.any,
    tasks: PropTypes.array
};

const compareDesc = field => (a,b) => a[field].toLowerCase() < b[field].toLowerCase() ? 1: a[field].toLowerCase() === b[field].toLowerCase() ? 0: -1;

const mapStateToProps = (state) => {
    const tasks = state.tasks.sort(compareDesc('title'));
    return {edit: state.visual.editTaskId,tasks};
};

export default connect(mapStateToProps)(ConnectedTaskList)
