import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CompleteTaskButton from '../components/CompleteTaskButton.jsx';
import {doTask} from '../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({doTask}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(CompleteTaskButton)
