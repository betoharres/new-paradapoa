import React from 'react'
import {shape, func} from 'prop-types'
import {Text} from 'react-native-elements'
import {Container} from './Home.styles'

export default function Home({navigation}) {
  function onPressBus(bus) {
    // fetch bus schedules
    // navigate to Bus
    navigation.navigate('Bus')
  }

  console.log('render')

  return (
    <Container>
      <Text onPress={onPressBus}>Home</Text>
    </Container>
  )
}

Home.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
}
