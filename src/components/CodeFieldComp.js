import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {WHITE, PRIMARY, BLACK} from '../utils/colors';

const CodeFieldComp = ({onChange, CELL_COUNT}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  const [props, getCellOnLayoutHandler] = useState({
    value,
    setValue,
  });

  const onChangeText = (value = props.text) => {
    setValue(value);
    onChange(value);
  };

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={onChangeText}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default CodeFieldComp;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  focusCell: {
    borderColor: PRIMARY,
  },
  codeFieldRoot: {marginVertical: 50},
  cell: {
    width: 45,
    height: 55,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: BLACK,
    marginRight: 5,
    marginLeft: 5,
  },
});
