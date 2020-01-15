import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import appReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import {getTasksFromStorage, pushTasksInStorage} from './actions';
import './index.css';
import App from './App';

/**
 * Redux store
 */
let store = createStore(appReducer);

/**
 * Get tasks from local storage
 */
store.dispatch(getTasksFromStorage());

/**
 * Syncronize task list with local storage periodically
 */
const timerId = setInterval(() => {
    const state = store.getState();
    store.dispatch(pushTasksInStorage(state.tasks));
}, 2000);

/**
 * Render app
 *  @param {Object} store - Redux store.
 *  @param {number=} cleanupId - Id of the syncronization interval.
 */
ReactDOM.render(<App store={store} cleanupId={timerId}/>, document.getElementById('root'));
