import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WHITE, activeTabColor} from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Matchesscreen from '../Screens/matches-screen';
import HomeDashboard from '../Screens/home-dashboard';
import Profilescreen from '../Screens/profile-screen';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeDashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {height: 60, marginBottom: 0, backgroundColor: '#151515'},
      }}>
      <Tab.Screen
        name="Matches"
        component={Matchesscreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 60,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? activeTabColor : null,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign
                name="heart"
                size={24}
                color={focused ? WHITE : 'gray'}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 60,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? activeTabColor : null,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <BottomS focused={focused} /> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profilescreen"
        component={Profilescreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 60,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? activeTabColor : null,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="person"
                size={30}
                color={focused ? WHITE : 'gray'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
