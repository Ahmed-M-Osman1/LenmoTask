import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/home/Home';

const Tab = createMaterialBottomTabNavigator();

export default function BotTabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="NotHome" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
