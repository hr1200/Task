import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PRIMARY, WHITE} from '../utils/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function DrawerMenu({navigation}) {
  let [selected, setSelected] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(39, 84, 71, 0.9)',
        width: '80%',
        // borderBottomRightRadius: 100,
        paddingVertical: 30,
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 26,
            color: WHITE,
          }}>
          Switch Modes
        </Text>

        <TouchableOpacity
          onPress={() => {
            setSelected((selected = 0));
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'red',
            width: '90%',
            marginTop: 20,
            backgroundColor:
              !selected == 0
                ? 'rgba(255, 255, 255, 0.07)'
                : 'rgba(255, 255, 255, 0.2)',
            padding: 20,
            borderRadius: 30,
          }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: WHITE,
                marginBottom: 15,
              }}>
              ShiaMeets
            </Text>
            <Text style={{color: WHITE, maxWidth: 185}}>Find a spouse.</Text>
          </View>
          <View
            style={{
              backgroundColor: !selected == 0 ? null : '#50645E',
              borderWidth: !selected == 0 ? 2 : 0,
              borderColor: !selected == 0 ? WHITE : null,
              backgroundColor: !selected == 0 ? null : '#50645E',
              height: !selected == 0 ? 30 : 40,
              width: !selected == 0 ? 30 : 40,
              borderRadius: !selected == 0 ? 15 : 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -5,
            }}>
            {!selected == 0 ? null : (
              <View
                style={{
                  backgroundColor: '#393939',
                  height: 28,
                  width: 28,
                  borderRadius: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome6 name="check" size={16} color={WHITE} />
              </View>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelected((selected = 1));
          }}
          style={{
            width: '90%',
            marginTop: 20,
            backgroundColor:
              !selected == 1
                ? 'rgba(255, 255, 255, 0.07)'
                : 'rgba(255, 255, 255, 0.2)',
            padding: 20,
            borderRadius: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: WHITE,
                marginBottom: 15,
              }}>
              ShiaGreets
            </Text>
            <View
              style={{
                borderWidth: !selected == 1 ? 2 : 0,
                borderColor: !selected == 1 ? WHITE : null,
                backgroundColor: !selected == 1 ? null : '#50645E',
                height: !selected == 1 ? 30 : 40,
                width: !selected == 1 ? 30 : 40,
                borderRadius: !selected == 1 ? 15 : 20,
                alignSelf: 'flex-start',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -5,
              }}>
              {!selected == 1 ? null : (
                <View
                  style={{
                    backgroundColor: '#393939',
                    height: 28,
                    width: 28,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome6 name="check" size={16} color={WHITE} />
                </View>
              )}
            </View>
          </View>
          <Text
            style={{
              color: WHITE,
              maxWidth: 185,
            }}>
            network and make connections
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
