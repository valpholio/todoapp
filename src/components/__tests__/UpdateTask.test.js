import React from 'react';
import renderer from 'react-test-renderer';
import UpdateTask from '../UpdateTask.jsx';

describe('UpdateTask', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<UpdateTask/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});