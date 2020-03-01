import React from 'react'
import {render as r} from 'react-native-testing-library'

export function render(Component, {props = {}, params = {}} = {}) {
  const navigate = props.navigation && props.navigation.navigate || jest.fn()
  const navigation = {route: {params}, navigate}
  return r(<Component navigation={navigation} {...props} />)
}
