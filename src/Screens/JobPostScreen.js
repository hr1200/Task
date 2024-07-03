import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/header';
import {DARKGREY, GRAY, GREEN, LIGHTGREY, WHITE} from '../Constants/Colors';

export default function JobPostScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: WHITE,
      }}>
      <Header Heading={'Post a Job'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: LIGHTGREY,
            padding: 20,
            flexDirection: 'row',
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: GREEN,
                  height: 25,
                  width: 30,
                  borderRadius: 13,
                }}
              />
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: DARKGREY,
                  width: '42%',
                  height: 0,
                  alignSelf: 'center',
                }}
              />
            </View>

            <Text style={{color: GREEN, marginTop: '3%', fontSize: 12}}>
              Job Detail
            </Text>
          </View>
          <View
            style={{
              marginLeft: '-21%',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: DARKGREY,
                }}
              />
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: DARKGREY,
                  width: '42%',
                  height: 0,
                  alignSelf: 'center',
                }}
              />
            </View>

            <Text
              style={{
                color: DARKGREY,
                marginTop: '3%',
                fontSize: 12,
                marginLeft: '-7%',
              }}>
              Post Detail
            </Text>
          </View>
          <View
            style={{
              marginLeft: '-27%',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: DARKGREY,
                }}
              />
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: DARKGREY,
                  width: '42%',
                  height: 0,
                  alignSelf: 'center',
                }}
              />
            </View>

            <Text
              style={{
                color: DARKGREY,
                marginTop: '3%',
                fontSize: 12,
                marginLeft: '-7%',
              }}>
              Post Detail
            </Text>
          </View>
          <View
            style={{
              marginLeft: '-28%',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: DARKGREY,
                }}
              />
              <View
                style={{
                  // borderWidth: 0.5,
                  // borderColor: DARKGREY,
                  width: '42%',
                  height: 0,
                  alignSelf: 'center',
                }}
              />
            </View>

            <Text
              style={{
                color: DARKGREY,
                marginTop: '3%',
                fontSize: 12,
                marginLeft: '-7%',
              }}>
              Post Detail
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
