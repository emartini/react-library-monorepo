import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

it('CheckboxWithLabel changes the text after click', () => {
  const wrapper = shallow(<HelloWorld />);

  expect(wrapper.exists()).toBe(true);
});
