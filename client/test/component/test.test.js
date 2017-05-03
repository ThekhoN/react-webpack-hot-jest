import React from 'react';
import Test from '../../src/component/test';
import renderer from 'react-test-renderer';

test('Test component is a H2 element with class .test', () => {
  const component = renderer.create(
    <Test/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
