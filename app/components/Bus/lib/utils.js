export function getCurrentDayType() {
  const date = new Date()
  const day = date.getDay()
  if (day >= 1 && day <= 5) return 1
  else if (day === 6) return 2
  else return 3
}
