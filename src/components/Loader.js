import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import {WHITE, YELLOW} from '../Constant/Colors';
import {PRIMARY} from '../utils/colors';

export default function Loader() {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <ActivityIndicator size="large" color={PRIMARY} />
      </View>
    </Modal>
  );
}
