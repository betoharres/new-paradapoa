import React from 'react';
import Pagination from './Pagination';
import {render, mockProps} from '~/jest';
import schedules from '~/jest/665.json';

it('renders correctly', () => {
  const props = mockProps({props: {entries: schedules, activeIndex: 0}});
  const wrapper = render(<Pagination {...props} />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
