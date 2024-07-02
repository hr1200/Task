import React from 'react';
import {View} from 'react-native';
import Header from '../components/header';

export default function JobPostScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Header />
    </View>
  );
}
