import React from 'react';
import Task from '../components/Task.jsx';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
    const filteredPosts = state.filter ? state.posts.filter(post => post.category === state.filter) : state.posts;
    return {posts: filteredPosts.map(post => {
            const {user, ...rest} = post;
            const userObj = state.users.find(({username}) => user === username);
            return {
                user: userObj,
                ...rest
            }
        })};
};

const ConnectedTask = connect(mapStateToProps)(Task);

export default ConnectedTask