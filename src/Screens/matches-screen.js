import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../components/header';

export default function Matchesscreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header
        noBack={true}
        noLine={true}
        Heading={'Match'}
        windowDivisionNumber={5}
        navigation={navigation}
      />
    </View>
  );
}
