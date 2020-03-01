import {Dimensions} from 'react-native'
import styled from 'styled-components/native'
import {Card as RNECard, ListItem as RNEListItem} from 'react-native-elements'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const Card = styled(RNECard).attrs(() => ({
  containerStyle: {
    borderRadius: 15,
    maxHeight: SCREEN_HEIGHT - 205,
    paddingBottom: 50,
  },
  dividerStyle: {
    display: 'none',
  },
}))``

export const ListItem = styled(RNEListItem).attrs(({disabled}) => ({
  titleStyle: {
    color: disabled ? 'grey' : 'black',
  },
}))``
