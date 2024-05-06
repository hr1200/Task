import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {BLACK, PRIMARY, WHITE} from '../utils/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const TextField = ({
  label,
  errorText,
  value,
  style,
  onBlur,
  onFocus,
  borderColor,
  labelColor,
  inputProps,
  textInputStyle,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let inputBorderColor = borderColor || '#B9C4CA';
  if (isFocused) {
    inputBorderColor = borderColor || '#080F9C';
  }
  if (errorText) {
    inputBorderColor = borderColor || '#B00020';
  }

  let labelTextColor = labelColor || inputBorderColor;

  return (
    <View style={style}>
      <View
        style={{
          backgroundColor: PRIMARY,
          height: 20,
          width: 20,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: -8,
          top: 15,
          zIndex: 555,
        }}>
        <FontAwesome6 name={'check'} size={13} color={WHITE} />
      </View>
      <TextInput
        style={textInputStyle}
        // style={[
        //   styles.input,
        //   {
        //     borderColor: inputBorderColor,
        //   },
        // ]}
        ref={inputRef}
        {...inputProps}
        value={value}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onChangeText={onChangeText}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 0],
                    outputRange: [0.8, 0.85],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [17, -12],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 0],
                  }),
                },
              ],
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: labelTextColor,
              },
            ]}>
            {label}
            {errorText ? '*' : ''}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 24,
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    backgroundColor: '#ECECEC',
  },
  label: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: BLACK,
    fontFamily: 'Avenir-Medium',
  },
});

export default TextField;
