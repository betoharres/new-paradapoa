import React from 'react'
import Bus from './Bus'
import { render } from 'react-native-testing-library'

it('renders correctly', () => {
  const navigation = {route: {params: {bus}}}
  const wrapper = render(<Bus navigation={navigation} />)
  expect(wrapper.toJSON()).toMatchSnapshot()
})
