import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ConnectedUpdateTask from '../containers/ConnectedUpdateTask.jsx';
import ConnectedAddTaskButton from '../containers/ConnectedAddTaskButton.jsx';
import ConnectedTaskList from './ConnectedTaskList.jsx';
import {enterAddTaskMode, exitAddTaskMode} from '../actions';

const Main = ({isAddMode}) => {
    return (
        <div>
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
