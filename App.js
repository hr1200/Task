import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/stack-navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
