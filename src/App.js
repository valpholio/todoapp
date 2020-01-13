import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Main from './containers/Main.jsx';
import './App.css';
import Main from './components/Main.jsx';

function App({store, cleanupId}) {
    useEffect(() => {
        return () => { if (cleanupId) {clearInterval(cleanupId);} }
    });

    useEffect(() => {
        return () => { if (cleanupId) {clearInterval(cleanupId);} }
    });

  return (
      <Provider store={store}>
          <Main></Main>
      </Provider>
  );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    cleanupId: PropTypes.any
};

export default App;
