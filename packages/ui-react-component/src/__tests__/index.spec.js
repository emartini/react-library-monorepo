import React from 'react';
import { shallow } from 'enzyme';

import UIComponent from '../';

describe('UIComponent', () => {
  const wrapper = shallow(<UIComponent />);

  it('has a initial state', () => {
    expect(wrapper.state('key')).toBe('value');
  });
});
