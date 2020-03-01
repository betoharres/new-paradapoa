import Bus from './Bus'
import {render} from '~/jest'

it('renders correctly', () => {
  const bus = {id: 80}
  const wrapper = render(Bus, {params: bus})
  expect(wrapper.toJSON()).toMatchSnapshot()
})
