import React from 'react';
import renderer from 'react-test-renderer';
import Task from '../Task.jsx';

describe('Task', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<Task title='title' text='text'/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});