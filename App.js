import { View, Text } from 'react-native'
import React from 'react'
import Vingroup from './Btap/BtapMoi/Vingroup'
import LimitComp from './Btap/LimitComp'
import ItemComp from './Btap/BtapMoi3/ItemComp'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MovieDetail from './Btap/BtapMoi3/MovieDetail'
import MovieDisplay from './Btap/BtapMoi3/MovieDisplay'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Movie Explorer' component={ MovieDisplay}/>
        <Stack.Screen name='Movie Detail' component= {MovieDetail } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App