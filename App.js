import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/stack-navigation';
import AlertModal from './src/components/AlertModal';
import {useSelector} from 'react-redux';
import LottieLoader from './src/components/LottieLoader';

const App = () => {
  let PopupAlert = useSelector(state => state.AlertPopupMsg);
  let isLoader = useSelector(state => state.Loader);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigation />
      </SafeAreaView>
      <AlertModal PopupAlert={PopupAlert} />
      <LottieLoader isLoader={isLoader} />
    </NavigationContainer>
  );
};

export default App;
