import React from 'react';
import renderer from 'react-test-renderer';
import CompleteTaskButton from '../CompleteTaskButton.jsx';

describe('CompleteTaskButton', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<CompleteTaskButton id='1'/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});