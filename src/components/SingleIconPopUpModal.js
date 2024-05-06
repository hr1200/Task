import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import {BLACK, PRIMARY, WHITE} from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SingleIconPopUpModal({
  modalVisible,
  setModalVisible,
  disabled,
  icon,
  Heading,
  Message,
  btnOneText,
  btnTwoText,
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => setModalVisible(!modalVisible)}
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
          <View style={{alignItems: 'center'}}>{icon}</View>

          <Text
            style={{
              fontSize: 16,
              lineHeight: 18,
              color: '#1e1e1e',
              fontWeight: '500',
            }}>
            {Heading}
          </Text>

          <Text style={{marginTop: 25, fontSize: 16, textAlign: 'center'}}>
            {Message}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#DDE8E5',
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: '47%',
                borderRadius: 20,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={{fontSize: 16}}>{btnOneText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: PRIMARY,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: '47%',
                borderRadius: 20,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{fontSize: 16, color: WHITE}}>{btnTwoText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
