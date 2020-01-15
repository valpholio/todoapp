import React from 'react';
import renderer from 'react-test-renderer';
import AddTaskButton from '../AddTaskButton.jsx';

describe('AddTaskButton', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<AddTaskButton />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});