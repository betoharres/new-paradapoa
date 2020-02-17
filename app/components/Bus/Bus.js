import React from 'react'
import {string, number, shape, func} from 'prop-types'
import {Text} from 'react-native-elements'
import {Container} from './Bus.styles'

export default function Bus({id, code, name, navigation}) {
  return (
    <Container>
      <Text>Bus</Text>
    </Container>
  )
}

Bus.propTypes = {
  id: number.isRequired,
  code: string.isRequired,
  name: string.isRequired,
  navigation: shape({
    goBack: func.isRequired,
  }).isRequired,
}
