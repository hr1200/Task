import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './bottom-tab-navigator';
import {BLUE, WHITE} from '../utils/colors';
import DrawerMenu from '../components/DrawerMenu';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <>
          <DrawerMenu
            {...props}
            onpress={() => props.navigation.closeDrawer()}
            // onPress={() => {
            //   AsyncStorage.removeItem('user_data');
            //   AsyncStorage.removeItem('phone');
            //   props.navigation.reset({
            //     index: 0,
            //     routes: [{name: 'LoginSignupScreen'}],
            //   });
            // }}
            onPressCross={() => props.navigation.closeDrawer()}
            onLanguageSelect={() => {
              setVisible(true);
            }}
          />
          {/* <SelectlanguageModel settext={settext} visible={visible} /> */}
        </>
      )}
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          width: '100%',
          backgroundColor: 'transparent',
        },
        headerShown: false,
        headerTransparent: true,

        drawerActiveBackgroundColor: BLUE,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerLabelStyle: {
          marginLeft: -10,
          fontSize: 18,
          fontWeight: '500',
        },
      }}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
