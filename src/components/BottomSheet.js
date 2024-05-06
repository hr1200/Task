import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WheelPicker from './WheelPicker';
import {BLACK, PRIMARY, WHITE} from '../utils/colors';

export const BottomSheet = ({onOpen, feet, setFeet, inches, setInches}) => {
  const translateY = useRef(new Animated.Value(500)).current;
  const [selectedValue, setSelectedValue] = useState(null);
  const [data, setData] = useState([
    '4 ft',
    '5 ft',
    '6 ft',
    '7 ft',
    '8 ft',
    '9 ft',
    '10 ft',
    '11 ft',
  ]);
  const [arr, setArr] = useState([
    ' 1 inches',
    ' 2 inches',
    ' 3 inches',
    ' 4 inches',
    ' 5 inches',
    ' 6 inches',
    ' 7 inches',
    ' 8 inches',
    ' 9 inches',
    '10 inches',
    '11 inches',
  ]);

  //   const handleValueSelection = value => {
  //     setSelectedValue(value);
  //   };

  const openBottomSheet = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const closeBottomSheet = () => {
    Animated.timing(translateY, {
      toValue: 500,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleGestureRelease = (_, gestureState) => {
    if (gestureState.dy > 100) {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  };

  useEffect(() => {
    if (onOpen) openBottomSheet();
    else closeBottomSheet();
  }, [onOpen]);

  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
      }}>
      <Animated.View
        style={[
          styles.bottomSheetContainer,
          {
            transform: [{translateY}],
          },
        ]}
        // {...{onMoveShouldSetResponderCapture: handleGestureMove}}
        onResponderRelease={handleGestureRelease}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 22,
            color: BLACK,
            fontWeight: 500,
            marginVertical: '5%',
          }}>
          Height
        </Text>
        <View style={styles.bottomSheetContent}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
            style={[StyleSheet.absoluteFill, styles.topGradient]}
          />
          <WheelPicker
            dataSource={data}
            selectedIndex={1}
            renderItem={(data, index) => {
              return <Text style={{fontSize: 50}}>{data}</Text>;
            }}
            onValueChange={(data, selectedIndex) => {
              setFeet((feet = data));
            }}
            wrapperHeight={200}
            itemHeight={60}
            wrapperBackground="#FFFFFF"
            highlightColor="#d8d8d8"
            highlightBorderWidth={2}
          />
          <WheelPicker
            dataSource={arr}
            selectedIndex={1}
            renderItem={(data, index) => {
              return <Text style={{fontSize: 50}}>{data}</Text>;
            }}
            onValueChange={(data, selectedIndex) => {
              setInches((inches = data));
            }}
            wrapperHeight={200}
            itemHeight={60}
            wrapperBackground="#FFFFFF"
            highlightColor="#d8d8d8"
            highlightBorderWidth={2}
          />
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
            style={[StyleSheet.absoluteFill, styles.bottomGradient]}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            closeBottomSheet();
          }}
          style={{
            backgroundColor: PRIMARY,
            padding: 10,
            width: '80%',
            borderRadius: 20,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: WHITE}}>Done</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 350,
  },
  bottomSheetContainerGradient: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  topGradient: {
    zIndex: 555,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '60%',
  },
  bottomGradient: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: '60%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomSheetContent: {
    // padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{
  /* <LinearGradient
            colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
            style={[StyleSheet.absoluteFill, styles.topGradient]}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
            style={[StyleSheet.absoluteFill, styles.bottomGradient]}
          /> */
}

// const renderItem = ({item, index}) => (
//     <TouchableOpacity
//       style={{padding: 5, marginBottom: 10}}
//       onPress={() => {
//         handleValueSelection(item.label);
//       }}>
//       <Text style={{fontSize: 20}}>{item.label}</Text>
//     </TouchableOpacity>
//   );
