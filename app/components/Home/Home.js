import React from 'react'
import {shape, func} from 'prop-types'
import {Text} from 'react-native-elements'
import {Container} from './Home.styles'

export default function Home({navigation}) {
  function onPressBus(bus) {
    // fetch bus schedules
    navigation.navigate('Bus', bus)
  }

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  )
}

Home.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
}
