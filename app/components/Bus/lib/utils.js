export function getCurrentDayType(schedules) {
  const date = new Date()
  const day = date.getDay()
  if (day >= 1 && day <= 5) return 0
  else if (day === 6) return schedules.findIndex(i => i === '2')
  else return schedules.length - 1
}

export function getCurrentTimeDateTimeValue(dayType, hour, minute) {
  // Dias Úteis: 2020-01-03
  // Sábado: 2020-01-04
  // Domingo: 2020-01-05
  const dayTypeDaysOfTheMonth = {1: 3, 2: 4, 3: 5}
  const day = dayTypeDaysOfTheMonth[dayType]
  const date = new Date(2020, 0, day)
  const timeDateTime = (new Date(date.setHours(hour))).setMinutes(minute)
  return new Date(timeDateTime)
}
