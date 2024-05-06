import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {isNullOrEmpty} from '../utils/text-utils';
import {BLACK, GRAY, GREY, PRIMARY, WHITE} from '../utils/colors';

export default function InputBox({
  secure = false,
  placeholder,
  icon,
  inputType,
  value,
  onChange,
  error,
  editable,
  keyboardType,
  maxLength,
  autoCapitalize,
  placeholderTextColor,
  label,
  marginTop,
  padding,
}) {
  const [focus, setFocus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(secure);

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: !focus ? 10 : -8,
    fontSize: !focus ? 14 : 12,
    color: !focus ? '#555555' : PRIMARY,
  };
  const labelStyleValue = {
    position: 'absolute',
    left: 0,
    top: -8,
    fontSize: 12,
    color: PRIMARY,
  };

  return (
    <View
      style={{
        marginVertical: 5,
        flexDirection: 'row',
        borderWidth: focus ? 2 : 0,
        borderColor: focus ? PRIMARY : '#D7D7D7',
        height: 50,
        marginTop: marginTop ? marginTop : 20,
        backgroundColor: WHITE,
        borderRadius: 30,
        paddingLeft: padding ? padding : null,
      }}>
      {/* <View style={{alignSelf: 'center', marginLeft: 20}}>{icon}</View> */}
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          position: 'absolute',
          right: 10,
          top: 0,
          width: '100%',
        }}>
        {!isNullOrEmpty(error) ? (
          <Text style={{color: 'red', fontSize: 11}}>{error}</Text>
        ) : null}
      </View>

      <Text style={!isNullOrEmpty(value) ? labelStyleValue : labelStyle}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        type={inputType}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        value={value}
        onChangeText={onChange}
        maxLength={maxLength}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : BLACK
        }
        style={{padding: 2, color: BLACK, flex: 1, fontSize: 16}}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        editable={editable}
        secureTextEntry={secureTextEntry}
      />
      {secure ? (
        <View
          style={{
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 4,
          }}>
          <FontAwesome5
            name={secureTextEntry ? 'eye-slash' : 'eye'}
            size={15}
            color={GREY}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          />
        </View>
      ) : null}
    </View>
  );
}
