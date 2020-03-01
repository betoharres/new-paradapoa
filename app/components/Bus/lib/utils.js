export function getCurrentDayType(schedules) {
  const date = new Date()
  const day = date.getDay()
  if (day >= 1 && day <= 5) return 0
  else if (day === 6) return schedules.findIndex(i => i === '2')
  else return schedules.length - 1
}
