import React from 'react';
import {View, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

export default function LottieLoader({isLoader}) {
  return (
    <Modal animationType="fade" transparent={true} visible={isLoader}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
        <LottieView
          style={{height: 160, width: 130}}
          source={require('../assets/lotieLoder.json')}
          autoPlay
          loop
          speed={1}
        />
      </View>
    </Modal>
  );
}
