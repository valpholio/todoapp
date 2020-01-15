import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EditTaskButton from '../components/EditTaskButton.jsx';
import {enterEditTaskMode} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({enterEditTaskMode}, dispatch);

/**
 * Connects {@link EditTaskButton} to redux store.
 */
const ConnectedEditTaskButton = connect(
    null,
    mapDispatchToProps
)(EditTaskButton);

export default ConnectedEditTaskButton
