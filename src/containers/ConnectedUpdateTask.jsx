import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UpdateTask from '../components/UpdateTask.jsx';
import {createTask, exitAddTaskMode,editTask, exitEditTaskMode} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({createTask,exitAddTaskMode,editTask, exitEditTaskMode}, dispatch);

/**
 * Connects {@link UpdateTask} to redux store.
 */
const ConnectedUpdateTask = connect(
    null,
    mapDispatchToProps
)(UpdateTask);

export default ConnectedUpdateTask
