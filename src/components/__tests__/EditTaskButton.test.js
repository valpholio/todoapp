import React from 'react';
import renderer from 'react-test-renderer';
import EditTaskButton from '../EditTaskButton.jsx';

describe('EditTaskButton', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<EditTaskButton id='1'/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});