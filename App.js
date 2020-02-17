import React, {useState, useEffect} from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'

import {Home, Bus} from './app/components'
import { connectToDatabase, DatabaseContext } from './app/database'

const Stack = createStackNavigator()

function App() {
  const [databaseConnection, setDatabaseConnection] = useState(null)

  useEffect(() => {
    async function initializeDatabase() {
      const conn = await connectToDatabase()
      setDatabaseConnection(conn)
    }
    initializeDatabase()
  }, [])

  const scheme = useColorScheme()
  return (
    <DatabaseContext.Provider value={databaseConnection}>
      <AppearanceProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Bus" component={Bus} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </DatabaseContext.Provider>
  )
}

export default App
