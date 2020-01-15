import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddTaskButton from '../components/AddTaskButton.jsx';
import {enterAddTaskMode} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({enterAddTaskMode}, dispatch);

/**
 * Connects {@link AddTaskButton} AddTaskButton to redux store.
 */
const ConnectedAddTaskButton = connect(
    null,
    mapDispatchToProps
)(AddTaskButton);

export default ConnectedAddTaskButton
