import React, {useCallback, useEffect, useContext, useState} from 'react'
import {string, number, shape, func} from 'prop-types'
// prettier fucked up
// eslint-disable-next-line max-len
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import DayType from './DayType'
import {DatabaseContext} from '~/app/database'
import BusSchedule from './lib/BusSchedule'
import {directionLabels} from './lib/constants'

const Tab = createMaterialTopTabNavigator()

export default function Bus({
  route: {
    params: {bus},
  },
  navigation,
}) {
  const conn = useContext(DatabaseContext)
  const [busData, setBusData] = useState(null)

  function formatSchedulesIntoSections(dbSchedules) {
    let currentSchedule
    for (let i = 0; i < dbSchedules.length; i++) {
      const schedule = dbSchedules.item(i)
      const currentDayType = schedule.dayType
      const {direction: currentDirection} = schedule

      if (!currentSchedule) {
        currentSchedule = new BusSchedule(currentDirection, currentDayType)
      } else {
        if (currentSchedule._dayType !== currentDayType) {
          currentSchedule.newSchedules(currentDirection, currentDayType)
        }
      }
      currentSchedule.addSchedule(schedule)
    }
    return currentSchedule.busData
  }

  const fetchBusData = useCallback(
    async (bus) => {
      const sql = 'SELECT * FROM schedules WHERE bus_id = (?);'
      const [result] = await conn.executeSql(sql, [bus.id])
      const {rows: schedules} = result
      const busData = formatSchedulesIntoSections(schedules)
      setBusData(busData)
    },
    [conn]
  )

  useEffect(() => {
    fetchBusData(bus)
  }, [bus, fetchBusData])

  if (busData) {
    const directions = Object.keys(busData)
    return (
      <Tab.Navigator tabBarOptions={{showIcon: true}} swipeEnabled={false}>
        {directions.map((direction, index) => {
          const directionName = directionLabels[direction]
          return (
            <Tab.Screen
              key={direction}
              initialRoute={!index}
              name={directionName}
              component={DayType}
              tabBarAccessibilityLabel={`Sentido do Ônibus: ${directionName}`}
              initialParams={{dayTypeSchedules: busData[direction]}}
            />
          )
        })}
      </Tab.Navigator>
    )
  } else {
    return null
  }
}

Bus.propTypes = {
  route: shape({
    params: shape({
      bus: shape({
        id: number.isRequired,
        code: string.isRequired,
        name: string.isRequired,
      }),
    }),
  }),
  navigation: shape({
    goBack: func.isRequired,
  }).isRequired,
}
