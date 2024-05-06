// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Animated,
//   TextInput,
//   Keyboard,
// } from 'react-native';
// import PropTypes from 'prop-types';

// const SelectList = props => {
//   const oldOption = useRef(null);
//   const [_firstRender, _setFirstRender] = useState(true);
//   const [dropdown, setDropdown] = useState(props.dropdownShown);
//   const [selectedval, setSelectedVal] = useState('');
//   const [height, setHeight] = useState(200);
//   const animatedvalue = useRef(new Animated.Value(0)).current;
//   const [filtereddata, setFilteredData] = useState(props.data);

//   const slidedown = () => {
//     setDropdown(true);
//     Animated.timing(animatedvalue, {
//       toValue: height,
//       duration: 500,
//       useNativeDriver: false,
//     }).start();
//   };

//   const slideup = () => {
//     Animated.timing(animatedvalue, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: false,
//     }).start(() => setDropdown(false));
//   };

//   useEffect(() => {
//     if (props.maxHeight) setHeight(props.maxHeight);
//   }, [props.maxHeight]);

//   useEffect(() => {
//     setFilteredData(props.data);
//   }, [props.data]);

//   useEffect(() => {
//     if (_firstRender) {
//       _setFirstRender(false);
//       return;
//     }
//     props.onSelect && props.onSelect();
//   }, [selectedval]);

//   useEffect(() => {
//     if (
//       !_firstRender &&
//       props.defaultOption &&
//       oldOption.current !== props.defaultOption.key
//     ) {
//       oldOption.current = props.defaultOption.key;
//       props.setSelected(props.defaultOption.key);
//       setSelectedVal(props.defaultOption.value);
//     }
//     if (
//       props.defaultOption &&
//       _firstRender &&
//       props.defaultOption.key !== undefined
//     ) {
//       oldOption.current = props.defaultOption.key;
//       props.setSelected(props.defaultOption.key);
//       setSelectedVal(props.defaultOption.value);
//     }
//   }, [props.defaultOption]);

//   useEffect(() => {
//     if (!_firstRender) {
//       if (props.dropdownShown) slidedown();
//       else slideup();
//     }
//   }, [props.dropdownShown]);

//   return (
//     <View>
//       {dropdown && props.search ? (
//         <View style={[styles.wrapper, props.boxStyles]}>
//           <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
//             {!props.searchicon ? (
//               <Image
//                 source={require('../../components/SingleSelect/assets/search.png')}
//                 resizeMode="contain"
//                 style={{width: 20, height: 20, marginRight: 7}}
//               />
//             ) : (
//               props.searchicon
//             )}

//             <TextInput
//               placeholder={props.searchPlaceholder}
//               onChangeText={val => {
//                 val = val.toLowerCase();
//                 const result = props.data.filter(item => {
//                   val.toLowerCase();
//                   const row = item.value.toLowerCase();
//                   return row.search(val.toLowerCase()) > -1;
//                 });
//                 setFilteredData(result);
//               }}
//               style={[
//                 {padding: 0, height: 20, flex: 1, fontFamily: props.fontFamily},
//                 props.inputStyles,
//               ]}
//             />
//             <TouchableOpacity onPress={() => slideup()}>
//               {!props.closeicon ? (
//                 <Image
//                   source={require('../../components/SingleSelect/assets/close.png')}
//                   resizeMode="contain"
//                   style={{width: 17, height: 17}}
//                 />
//               ) : (
//                 props.closeicon
//               )}
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <TouchableOpacity
//           style={[styles.wrapper, props.boxStyles]}
//           onPress={() => {
//             if (!dropdown) {
//               Keyboard.dismiss();
//               slidedown();
//             } else {
//               slideup();
//             }
//           }}>
//           <Text style={[{fontFamily: props.fontFamily}, props.inputStyles]}>
//             {selectedval === ''
//               ? props.placeholder || 'Select option'
//               : selectedval}
//           </Text>
//           {!props.arrowicon ? (
//             <Image
//               source={require('../../components/SingleSelect/assets/chevron.png')}
//               resizeMode="contain"
//               style={{width: 20, height: 20}}
//             />
//           ) : (
//             props.arrowicon
//           )}
//         </TouchableOpacity>
//       )}

//       {dropdown ? (
//         <Animated.View
//           style={[
//             {maxHeight: animatedvalue},
//             styles.dropdown,
//             props.dropdownStyles,
//           ]}>
//           <ScrollView
//             contentContainerStyle={{
//               paddingVertical: 10,
//               overflow: 'hidden',
//             }}
//             nestedScrollEnabled>
//             {filtereddata.length >= 1 ? (
//               filtereddata.map((item, index) => {
//                 const key = item.key || item.value || item;
//                 const value = item.value || item;
//                 const disabled = item.disabled || false;
//                 if (disabled) {
//                   return (
//                     <TouchableOpacity
//                       style={[styles.disabledoption, props.disabledItemStyles]}
//                       key={index}
//                       onPress={() => {}}>
//                       <Text
//                         style={[
//                           {color: '#c4c5c6', fontFamily: props.fontFamily},
//                           props.disabledTextStyles,
//                         ]}>
//                         {value}
//                       </Text>
//                     </TouchableOpacity>
//                   );
//                 } else {
//                   return (
//                     <TouchableOpacity
//                       style={[styles.option, props.dropdownItemStyles]}
//                       key={index}
//                       onPress={() => {
//                         if (props.save === 'value') {
//                           props.setSelected(item);
//                         } else {
//                           props.setSelected(key);
//                         }

//                         setSelectedVal(value);
//                         slideup();
//                         setTimeout(() => {
//                           setFilteredData(props.data);
//                         }, 800);
//                       }}>
//                       <Text
//                         style={[
//                           {fontFamily: props.fontFamily},
//                           props.dropdownTextStyles,
//                         ]}>
//                         {value}
//                       </Text>
//                     </TouchableOpacity>
//                   );
//                 }
//               })
//             ) : (
//               <View style={[styles.option, props.dropdownItemStyles]}>
//                 <Text
//                   style={[
//                     {fontFamily: props.fontFamily},
//                     props.dropdownErrorTextStyles,
//                   ]}>
//                   {props.notFoundText}
//                 </Text>
//               </View>
//             )}
//           </ScrollView>
//         </Animated.View>
//       ) : null}
//     </View>
//   );
// };

// SelectList.propTypes = {
//   setSelected: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   boxStyles: PropTypes.any,
//   inputStyles: PropTypes.any,
//   dropdownStyles: PropTypes.any,
//   dropdownItemStyles: PropTypes.any,
//   dropdownTextStyles: PropTypes.any,
//   dropdownErrorTextStyles: PropTypes.any,
//   maxHeight: PropTypes.number,
//   data: PropTypes.array.isRequired,
//   defaultOption: PropTypes.any,
//   searchicon: PropTypes.bool,
//   arrowicon: PropTypes.bool,
//   closeicon: PropTypes.bool,
//   search: PropTypes.bool,
//   searchPlaceholder: PropTypes.string,
//   notFoundText: PropTypes.string,
//   disabledItemStyles: PropTypes.any,
//   disabledTextStyles: PropTypes.any,
//   onSelect: PropTypes.func,
//   save: PropTypes.string,
//   dropdownShown: PropTypes.bool,
//   fontFamily: PropTypes.string,
// };

// export default SelectList;

// const styles = StyleSheet.create({
//   wrapper: {
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: 'gray',
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   dropdown: {
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: 'gray',
//     marginTop: 10,
//     overflow: 'hidden',
//   },
//   option: {paddingHorizontal: 20, paddingVertical: 8, overflow: 'hidden'},
//   disabledoption: {
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'whitesmoke',
//     opacity: 0.9,
//   },
// });

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  TextInput,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import {PRIMARY} from '../../utils/colors';

const SelectList = props => {
  // console.log('props**********', props);
  console.log('close**********', props.close);
  const oldOption = useRef(null);
  const [_firstRender, _setFirstRender] = useState(true);
  const [dropdown, setDropdown] = useState(props.dropdownShown);
  const [selectedval, setSelectedVal] = useState('');
  const [height, setHeight] = useState(200);
  const animatedvalue = useRef(new Animated.Value(0)).current;
  const [filtereddata, setFilteredData] = useState(props.data);
  const [selectedItems, setSelectedItems] = useState([]);

  const slidedown = () => {
    setDropdown(true);
    Animated.timing(animatedvalue, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const slideup = () => {
    Animated.timing(animatedvalue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setDropdown(false));
  };

  useEffect(() => {
    slideup();
  }, [props.close]);

  // const toggleSelection = item => {
  //   const isSelected = selectedItems.some(
  //     selectedItem => selectedItem.key === item.key,
  //   );

  //   if (isSelected) {
  //     setSelectedItems(prevSelected =>
  //       prevSelected.filter(selectedItem => selectedItem.key !== item.key),
  //     );
  //   } else {
  //     setSelectedItems(prevSelected => [...prevSelected, item]);
  //   }

  //   if (!props.multiSelect) {
  //     // If it's not a multi-select, display the selected value and close the dropdown
  //     setSelectedVal(isSelected ? '' : item.value);
  //     slideup();
  //   }

  //   props.setSelected(props.multiSelect ? selectedItems : selectedItems[0]);
  // };

  const toggleSelection = item => {
    const isSelected = selectedItems.some(
      selectedItem => selectedItem.key === item.key,
    );

    if (isSelected) {
      setSelectedItems([item]);
    } else {
      if (!props.multiSelect) {
        setSelectedItems([item]);
      } else {
        setSelectedItems(prevSelected => [...prevSelected, item]);
      }
    }

    if (!props.multiSelect) {
      // If it's not a multi-select, display the selected value and close the dropdown
      setSelectedVal(isSelected ? '' : item.value);
      slideup();
    }

    props.setSelected(props.multiSelect ? selectedItems : [item]);
  };

  useEffect(() => {
    if (props.maxHeight) setHeight(props.maxHeight);
  }, [props.maxHeight]);

  useEffect(() => {
    setFilteredData(props.data);
  }, [props.data]);

  useEffect(() => {
    if (_firstRender) {
      _setFirstRender(false);
      return;
    }
    props.onSelect &&
      props.onSelect(props.multiSelect ? selectedItems : selectedItems[0]);
  }, [selectedItems]);

  useEffect(() => {
    if (
      !_firstRender &&
      props.defaultOption &&
      oldOption.current !== props.defaultOption.key
    ) {
      oldOption.current = props.defaultOption.key;
      props.setSelected(props.defaultOption.key);
      setSelectedVal(props.defaultOption.value);
    }
    if (
      props.defaultOption &&
      _firstRender &&
      props.defaultOption.key !== undefined
    ) {
      oldOption.current = props.defaultOption.key;
      props.setSelected(props.defaultOption.key);
      setSelectedVal(props.defaultOption.value);
    }
  }, [props.defaultOption]);

  useEffect(() => {
    if (!_firstRender) {
      if (props.dropdownShown) slidedown();
      else slideup();
    }
  }, [props.dropdownShown]);

  return (
    <View>
      {dropdown && props.search ? (
        <View style={[styles.wrapper, props.boxStyles]}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            {!props.searchicon ? (
              <Image
                source={require('../../components/SingleSelect/assets/search.png')}
                resizeMode="contain"
                style={{width: 20, height: 20, marginRight: 7}}
              />
            ) : (
              props.searchicon
            )}

            <TextInput
              placeholder={props.searchPlaceholder}
              onChangeText={val => {
                val = val.toLowerCase();
                const result = props.data.filter(item => {
                  val.toLowerCase();
                  const row = item.value.toLowerCase();
                  return row.search(val.toLowerCase()) > -1;
                });
                setFilteredData(result);
              }}
              style={[
                {padding: 0, height: 20, flex: 1, fontFamily: props.fontFamily},
                props.inputStyles,
              ]}
            />
            <TouchableOpacity onPress={() => slideup()}>
              {!props.closeicon ? (
                <Image
                  source={require('../../components/SingleSelect/assets/close.png')}
                  resizeMode="contain"
                  style={{width: 17, height: 17}}
                />
              ) : (
                props.closeicon
              )}
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.wrapper, props.boxStyles]}
          onPress={() => {
            if (!dropdown) {
              Keyboard.dismiss();
              slidedown();
            } else {
              slideup();
            }
          }}>
          <Text
            style={[
              {fontFamily: props.fontFamily},
              props.inputStyles,
              props.multiSelect && styles.multiSelectText,
            ]}>
            {props.multiSelect
              ? selectedItems.length > 0
                ? selectedItems.map(item => item.value).join(', ')
                : props.placeholder || 'Select option'
              : selectedval === ''
              ? props.placeholder || 'Select option'
              : selectedval}
          </Text>
          {!props.arrowicon ? (
            <Image
              source={require('../../components/SingleSelect/assets/chevron.png')}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          ) : (
            props.arrowicon
          )}
        </TouchableOpacity>
      )}

      {dropdown ? (
        <Animated.View
          style={[
            {maxHeight: animatedvalue},
            styles.dropdown,
            props.dropdownStyles,
          ]}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 10,
              overflow: 'hidden',
            }}
            nestedScrollEnabled>
            {filtereddata.length >= 1 ? (
              filtereddata.map((item, index) => {
                // debugger;
                const key = item.key || item.value || item;
                const value = item.value || item;
                const disabled = item.disabled || false;
                const isSelected = selectedItems.some(
                  selectedItem => selectedItem.key === item.key,
                );
                // const flag = item.flag || item;
                const base64Image = `data:image/png;base64,${item.flag}`;

                if (disabled) {
                  return (
                    <TouchableOpacity
                      style={[styles.disabledoption, props.disabledItemStyles]}
                      key={index}
                      onPress={() => {}}>
                      <Text
                        style={[
                          {color: '#c4c5c6', fontFamily: props.fontFamily},
                          props.disabledTextStyles,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.option,
                        props.dropdownItemStyles,
                        isSelected && styles.selectedOption,
                      ]}
                      key={index}
                      onPress={() => toggleSelection(item)}>
                      <View style={{flexDirection: 'row'}}>
                        {props.isFlag && (
                          <Image
                            source={{uri: base64Image}}
                            style={{
                              width: 20,
                              height: 15,
                              marginRight: '2%',
                              marginTop: '1.5%',
                            }}
                          />
                        )}

                        <Text
                          style={[
                            {fontFamily: props.fontFamily},
                            props.dropdownTextStyles,
                            isSelected && styles.selectedOption,
                          ]}>
                          {value}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }
              })
            ) : (
              <View style={[styles.option, props.dropdownItemStyles]}>
                <Text
                  style={[
                    {fontFamily: props.fontFamily},
                    props.dropdownErrorTextStyles,
                  ]}>
                  {props.notFoundText}
                </Text>
              </View>
            )}
          </ScrollView>
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: 10,
    overflow: 'hidden',
  },
  option: {paddingHorizontal: 20, paddingVertical: 8, overflow: 'hidden'},
  disabledoption: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    opacity: 0.9,
  },
  selectedOption: {
    backgroundColor: PRIMARY,
    color: 'white',
  },
  multiSelectText: {
    lineHeight: 20, // Adjust line height for better multi-select display
  },
});

SelectList.propTypes = {
  setSelected: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  boxStyles: PropTypes.any,
  inputStyles: PropTypes.any,
  dropdownStyles: PropTypes.any,
  dropdownItemStyles: PropTypes.any,
  dropdownTextStyles: PropTypes.any,
  dropdownErrorTextStyles: PropTypes.any,
  maxHeight: PropTypes.number,
  data: PropTypes.array.isRequired,
  defaultOption: PropTypes.any,
  searchicon: PropTypes.bool,
  arrowicon: PropTypes.bool,
  closeicon: PropTypes.bool,
  search: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  notFoundText: PropTypes.string,
  disabledItemStyles: PropTypes.any,
  disabledTextStyles: PropTypes.any,
  onSelect: PropTypes.func,
  save: PropTypes.string,
  dropdownShown: PropTypes.bool,
  fontFamily: PropTypes.string,
  multiSelect: PropTypes.bool, // Add multiSelect prop type
  close: PropTypes.bool,
  isFlag: PropTypes.bool,
  base64Flag: PropTypes.string,
};

export default SelectList;
