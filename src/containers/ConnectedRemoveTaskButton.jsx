import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RemoveTaskButton from '../components/RemoveTaskButton.jsx';
import {removeTask} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({removeTask}, dispatch);

/**
 * Connects {@link RemoveTaskButton} to redux store.
 */
const ConnectedRemoveTaskButton = connect(
    null,
    mapDispatchToProps
)(RemoveTaskButton);

export default ConnectedRemoveTaskButton
