import React from 'react';
import Add from '../../src/component/add';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

test('Add Component matches snapshot', () => {
  const component = renderer.create(<Add/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// test behaviour by mounting component
describe('Add', function () {
  let onAdd;
  let add;

  beforeEach(() => {
    // jest.fn() creates a mock function
    onAdd = jest.fn();
    add = mount(<Add onAdd={onAdd} />);
  });
  it('Add requires onAdd prop', () => {
    expect(add.props().onAdd).toBeDefined();
  });
  it('Add renders button', () => {
    const button = add.find('button').first();
    expect(button).toBeDefined();
  });
  it('Button click calls onAdd', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();
    input.simulate('change', {target: {value: 'Name 4'}});
    button.simulate('click');
    expect(onAdd).toBeCalledWith('Name 4');
  });
});
