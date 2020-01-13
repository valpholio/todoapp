import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RemoveTaskButton from '../components/RemoveTaskButton.jsx';
import {removeTask} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({removeTask}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(RemoveTaskButton)
