import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ConnectedUpdateTask from '../containers/ConnectedUpdateTask.jsx';
import ConnectedAddTaskButton from '../containers/ConnectedAddTaskButton.jsx';
import ConnectedTaskList from './ConnectedTaskList.jsx';
import {enterAddTaskMode, exitAddTaskMode} from '../actions';
import '../styles/Main.css';

/**
 * Main page container.
 * @param {boolean} isAddMode - Indicator of add task mode. Add task form is displayed when isAddMode is true.
 */
const Main = ({isAddMode}) => {
    return (
        <div className='Main'>
            <h1>Todo List</h1>
            <ConnectedTaskList/>
            {isAddMode ? <ConnectedUpdateTask task={{id: ''}}/> :
                <ConnectedAddTaskButton/>}
        </div>
    );
};

Main.propTypes = {
    isAddMode: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {isAddMode: state.visual.isAddTaskMode};
};
const mapDispatchToProps = (dispatch,) => bindActionCreators({enterAddTaskMode, exitAddTaskMode}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main)
