import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {BLACK, WHITE} from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({
  backButtonColor,
  Heading,
  windowDivisionNumber,
  navigation,
  noBack,
  noLine,
  navigateTo,
}) {
  const windowWidth = Dimensions.get('window').width;
  let bottomLineWidth = windowWidth / windowDivisionNumber;
  return (
    <View style={{backgroundColor: WHITE}}>
      <View
        style={{
          backgroundColor: WHITE,
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
        }}>
        {noBack ? null : (
          <TouchableOpacity
            onPress={() => {
              navigateTo
                ? navigation.reset({
                    index: 0,
                    routes: [{name: navigateTo}],
                  })
                : navigation.goBack();
            }}>
            <Ionicons
              name="chevron-back"
              size={35}
              color={backButtonColor ? backButtonColor : null}
            />
          </TouchableOpacity>
        )}
        <Text
          style={{
            fontSize: 21,
            fontWeight: '700',
            lineHeight: 23,
            color: BLACK,
            marginLeft: noBack ? 20 : 10,
            marginTop: noBack ? 15 : 4,
          }}>
          {Heading ? Heading : null}
        </Text>
      </View>
      {noLine ? null : (
        <View
          style={{
            backgroundColor: '#357A67',
            height: 6,
            width: windowDivisionNumber ? bottomLineWidth : 0,
          }}
        />
      )}
    </View>
  );
}
