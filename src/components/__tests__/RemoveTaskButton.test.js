import React from 'react';
import renderer from 'react-test-renderer';
import RemoveTaskButton from '../RemoveTaskButton.jsx';

describe('RemoveTaskButton', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<RemoveTaskButton id='1'/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
