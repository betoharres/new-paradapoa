import { createContext } from 'react'
import SQLite from 'react-native-sqlite-storage'

SQLite.enablePromise(true)

export async function connectToDatabase() {
  return SQLite.openDatabase({
    name: 'schedules',
    createFromLocation: '~schedules.db',
  })
}

export const DatabaseContext = createContext(null)
