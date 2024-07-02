import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import JobPostScreen from '../Screens/JobPostScreen';
import JobPreviewScreen from '../Screens/JobPreviewScreen';
import FinalScreen from '../Screens/FinalScreen';

const Stack = createStackNavigator();

function StackNavigation(props) {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="JobPostScreen"
        component={JobPostScreen}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="JobPreviewScreen"
        component={JobPreviewScreen}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="FinalScreen"
        component={FinalScreen}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
}

export default StackNavigation;
