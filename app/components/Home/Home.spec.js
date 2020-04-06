import React from 'react';
import Home from './Home';
import {render, mockProps} from '~/jest';

it('renders correctly', () => {
  const props = mockProps();
  const wrapper = render(<Home {...props} />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
