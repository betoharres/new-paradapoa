import styled from 'styled-components/native'
import {Pagination as RNPagination} from 'react-native-snap-carousel'

export const Pagination = styled(RNPagination).attrs(() => ({
  containerStyle: {
    backgroundColor: 'transparent',
  },
  dotContainerStyle: {
    margin: 0,
    padding: 0,
    height: 1,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
}))``
