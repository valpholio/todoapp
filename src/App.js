import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Main from './containers/Main.jsx';

/**
 * Root component that is root of the app.
 * @param {Object} store - Redux store, that this component passes to react-redux provider.
 * @param {number=} cleanupId - Id of interval work to be cleaned on app exit.
 */
function App({store, cleanupId}) {
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
    cleanupId: PropTypes.number
};

export default App;
