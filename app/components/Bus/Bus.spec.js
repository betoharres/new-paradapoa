import React from 'react';
import Bus from './Bus';
import {render, mockProps} from '~/jest';

it('renders correctly', () => {
  const bus = {id: 80};
  const props = mockProps({params: bus});
  const wrapper = render(<Bus {...props} />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it('renders and update correctly', () => {
  const bus = {id: 80};
  const props = mockProps({params: bus});
  const wrapper = render(<Bus {...props} />);
  wrapper.update(<Bus {...props} />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
