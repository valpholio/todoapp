import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UpdateTask from '../components/UpdateTask.jsx';
import {createTask, exitAddTaskMode,editTask, exitEditTaskMode} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({createTask,exitAddTaskMode,editTask, exitEditTaskMode}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(UpdateTask)
