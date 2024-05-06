import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import {BLACK, PRIMARY, WHITE} from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PopupModal({modalVisible, setModalVisible, disabled}) {
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/girl.png')}
              style={{height: 60, width: 60, borderRadius: 30, marginRight: 20}}
            />
            <Ionicons name={'chatbubble-sharp'} size={40} color={PRIMARY} />
          </View>

          <Text style={{marginTop: 25, fontSize: 16}}>
            Are you sure you want to accept chat request{' '}
            <Text style={{fontWeight: 'bold', color: BLACK}}>Meera Khan</Text>?
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
              <Text style={{fontSize: 16}}>Block</Text>
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
              <Text style={{fontSize: 16, color: WHITE}}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
