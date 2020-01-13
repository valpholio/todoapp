import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EditTaskButton from '../components/EditTaskButton.jsx';
import {enterEditTaskMode} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({enterEditTaskMode}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(EditTaskButton)
