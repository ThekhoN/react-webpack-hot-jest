import React from 'react';
import List from '../../src/component/list';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

const data = ['Name 1', 'Name 2', 'Name 3'];

test('List Component renders List', () => {
  const component = renderer.create(<List data={data}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('List Component', () => {
  let list;
  beforeEach(() => {
    list = shallow(<List data={data} />);
  });
  it('List renders table', () => {
    expect(list.find('table').length).toEqual(1);
  });
  it('Class of rendered table', () => {
    expect(list.find('.myClass').length).toEqual(1);
  });
  it('List renders column', () => {
    const arr = list.find('th');
    expect(arr.length).toEqual(1);
    expect(arr.first().text()).toEqual('Name');
  });
  it('List renders data', () => {
    const arr = list.find('td');
    expect(arr.length).toEqual(3);
    expect(arr.at(1).text()).toEqual('Name 2');
  });
});
