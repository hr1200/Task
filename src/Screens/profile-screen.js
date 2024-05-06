import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from '../components/header';
import {WHITE} from '../utils/colors';

export default function Profilescreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header
        noBack={true}
        noLine={true}
        Heading={'Profile'}
        windowDivisionNumber={5}
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  freeTextStye: {
    fontWeight: '700',
    fontSize: 12,
    marginTop: 5,
  },
  paidTextStyle: {
    marginTop: 5,
    color: WHITE,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
