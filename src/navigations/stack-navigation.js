import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './drawer-navigation';
import Splash from '../Screens/Splash';

const Stack = createStackNavigator();

function StackNavigation(props) {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Dashboard"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
