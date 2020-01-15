import React from 'react';
import renderer from 'react-test-renderer';
import EmptyTaskList from '../EmptyTaskList.jsx';

describe('EmptyTaskList', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<EmptyTaskList/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
