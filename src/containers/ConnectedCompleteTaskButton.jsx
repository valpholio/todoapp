import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CompleteTaskButton from '../components/CompleteTaskButton.jsx';
import {doTask} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({doTask}, dispatch);

/**
 * Connects {@link CompleteTaskButton} to redux store.
 */
const ConnectedCompleteTaskButton = connect(
    null,
    mapDispatchToProps
)(CompleteTaskButton);

export default ConnectedCompleteTaskButton
