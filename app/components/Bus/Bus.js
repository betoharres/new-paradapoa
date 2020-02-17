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
  id: number,
  code: string,
  name: string,
  navigation: shape({
    goBack: func.isRequired,
  }).isRequired,
}
