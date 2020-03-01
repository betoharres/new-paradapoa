import React, {useState} from 'react'
import {FlatList, Dimensions} from 'react-native'
import {shape, object} from 'prop-types'
import Carousel from 'react-native-snap-carousel'

import {Container, Card, ListItem} from './DayType.styles'
import Pagination from './Pagination'

import {dayTypeLabels} from './lib/constants'

const {width: SCREEN_WIDTH} = Dimensions.get('window')

export default function DayType({
  route: {
    params: {dayTypeSchedules},
  },
}) {
  const [activeDayType, setActiveDayType] = useState(0)
  const schedules = Object.keys(dayTypeSchedules)
  return (
    <>
      <Container>
        <Carousel
          data={schedules}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH * 0.6}
          inactiveSlideOpacity={0.85}
          inactiveSlideScale={0.6}
          onSnapToItem={setActiveDayType}
          renderItem={({item: dayType, index}) => {
            return (
              <Card key={dayType} title={dayTypeLabels[dayType]}>
                <FlatList
                  data={dayTypeSchedules[dayType]}
                  keyExtractor={({id}) => String(id)}
                  renderItem={({item: {time}}) => <ListItem title={time} />}
                />
              </Card>
            )
          }}
        />
      </Container>
      <Pagination entries={schedules} activeIndex={activeDayType} />
    </>
  )
}
DayType.propTypes = {
  route: shape({
    params: shape({
      dayTypeSchedules: object.isRequired,
    }).isRequired,
  }).isRequired,
}