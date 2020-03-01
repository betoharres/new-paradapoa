import React from 'react'
import {render as r} from 'react-native-testing-library'

export function render(Component, {props = {}, params = {}} = {}) {
  const { navigation } = props
  const navigate = navigation && navigation.navigate || jest.fn()
  const goBack = navigation && navigation.goBack || jest.fn()
  const mockProps = {...{route: {params}}, ...props}
  return r(<Component navigation={{navigate, goBack}} {...mockProps} />)
}
