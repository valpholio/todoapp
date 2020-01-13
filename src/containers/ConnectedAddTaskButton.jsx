import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddTaskButton from '../components/AddTaskButton.jsx';
import {enterAddTaskMode} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({enterAddTaskMode}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(AddTaskButton)
