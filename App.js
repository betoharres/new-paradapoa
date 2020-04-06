import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

import {Home, Bus} from './app/components';
import {connectToDatabase, DatabaseContext} from './app/database';

const Stack = createStackNavigator();
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const getBusNavigationOptions = ({
  route: {
    params: {bus},
  },
}) => ({
  title: `${bus.code} - ${bus.name}`,
  headerTitleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: SCREEN_WIDTH * 0.7,
  },
});

function App() {
  const [databaseConnection, setDatabaseConnection] = useState(null);

  useEffect(() => {
    async function initializeDatabase() {
      const conn = await connectToDatabase();
      setDatabaseConnection(conn);
    }
    initializeDatabase();
  }, []);

  const scheme = useColorScheme();
  return (
    <DatabaseContext.Provider value={databaseConnection}>
      <AppearanceProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Bus"
              component={Bus}
              options={getBusNavigationOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </DatabaseContext.Provider>
  );
}

export default App;
