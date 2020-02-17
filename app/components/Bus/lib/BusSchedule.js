import {directions, dayTypes} from './constants'

export default class BusSchedule {
  constructor(direction, dayType) {
    this._direction = direction
    this._dayType = dayType
    this._schedules = []
    this._busData = {[direction]: {[dayType]: []}}
  }

  static get directions() {
    return directions
  }

  static get dayTypes() {
    return dayTypes
  }

  get direction() {
    return this._direction
  }

  set direction(direction) {
    this._direction = direction
  }

  get dayType() {
    return this._dayType
  }

  set dayType(dayType) {
    this._dayType = dayType
  }

  get schedules() {
    return this._schedules
  }

  get busData() {
    return this._busData
  }

  newSchedules(direction, dayType) {
    if (direction !== this.direction) {
      this._direction = direction
    }
    this._dayType = dayType
    this._schedules = []
    this._busData[this._direction] = {
      ...this._busData[this._direction],
      ...{[dayType]: this._schedules},
    }
  }

  addSchedule(schedule) {
    const {_dayType, _direction, _schedules} = this
    if (_dayType && _direction) {
      const newSchedules = _schedules.concat(schedule)
      this._schedules = newSchedules
      this._busData[_direction][_dayType] = newSchedules
    } else {
      throw new Error('dayType and direction must be defined')
    }
  }
}
