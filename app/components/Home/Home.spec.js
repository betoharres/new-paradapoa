import { Platform } from 'react-native'
import Home from './Home'
import { render } from '~/jest'

it('renders correctly', () => {
  const wrapper = render(Home)
  expect(wrapper.toJSON()).toMatchSnapshot()
})
