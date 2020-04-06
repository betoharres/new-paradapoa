import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Card as RNECard, ListItem as RNEListItem} from 'react-native-elements';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled(RNECard).attrs(({dayType}) => {
  let dayTypeColor;
  switch (dayType) {
    case '1': // dias uteis
      dayTypeColor = '#D6D2D3';
      break;
    case '2': // sabado
      dayTypeColor = '#99BBE5';
      break;
    case '3': // domingo
      dayTypeColor = '#E7A130';
      break;
    default:
      dayTypeColor = 'black';
  }
  return {
    containerStyle: {
      borderRadius: 15,
      maxHeight: SCREEN_HEIGHT - 205,
      paddingBottom: 50,
    },
    dividerStyle: {
      backgroundColor: dayTypeColor,
      height: 1,
    },
  };
})``;

export const ListItem = styled(RNEListItem).attrs(({isHandicap, disabled}) => ({
  rightIcon: isHandicap
    ? {
        name: 'accessible',
        size: 17,
        color: '#5182BB',
      }
    : {},
  titleStyle: {
    color: disabled ? 'grey' : 'black',
  },
}))``;
