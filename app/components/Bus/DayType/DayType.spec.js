import React from 'react';
import DayType from './DayType';
import {render, mockProps} from '~/jest';
// import schedules from '~/jest/665.json';

it('renders correctly', () => {
  const props = mockProps({params: {dayTypeSchedules: {2: {2: []}}}});
  const wrapper = render(<DayType {...props} />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
