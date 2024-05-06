import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import {BLACK, PRIMARY, WHITE} from '../utils/colors';
import {isNullOrEmpty} from '../utils/text-utils';
import {useDispatch} from 'react-redux';
import {AlertPopupMsg} from '../../Store/Action';

export default function AlertModal({PopupAlert}) {
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!isNullOrEmpty(PopupAlert) ? true : false}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: WHITE,
            margin: 10,
            borderRadius: 10,
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{height: 22, width: 18, borderRadius: 30}}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: PRIMARY,
                marginLeft: 2,
              }}>
              hia Meets
            </Text>
          </View>
          <Text style={{marginTop: 25, fontSize: 16}}>{PopupAlert}</Text>

          <TouchableOpacity
            style={{
              backgroundColor: PRIMARY,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: '20%',
              borderRadius: 20,
              marginTop: '10%',
              alignSelf: 'flex-end',
            }}
            onPress={() => {
              dispatch(AlertPopupMsg(''));
            }}>
            <Text style={{fontSize: 16, color: WHITE}}>ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
