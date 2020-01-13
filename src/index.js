import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import appReducer from './reducers';
import {getTasksFromStorage,pushTasksInStorage} from './actions';

import './index.css';
import App from './App';

let store = createStore(appReducer);

store.dispatch(getTasksFromStorage());
const timerId = setInterval(()=> {
    const state = store.getState();
    store.dispatch(pushTasksInStorage(state.tasks));
},2000);
//store.dispatch(createTask('Cat', 'Feed cat'));
//store.dispatch(createTask('Shopping', 'Buy milk'));

ReactDOM.render(<App store={store} cleanupId={timerId}/>, document.getElementById('root'));

ReactDOM.render(<App store={store} cleanupId={timerId}/>, document.getElementById('root'));
