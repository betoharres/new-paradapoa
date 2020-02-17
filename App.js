import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'

import {Home, Bus} from './app/components'

const Stack = createStackNavigator()
function App() {
  const scheme = useColorScheme()
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Bus" component={Bus} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}

export default App
