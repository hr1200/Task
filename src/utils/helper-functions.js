import {parsePhoneNumberFromString} from 'libphonenumber-js';
import makeRequest, {ErrorCode, closeApp, handleErrorResponse} from './Helper';
import {
  GetAllCityApiCall,
  GetAllCountriesApiCall,
  GetLookUpByIdApiCall,
} from "../Api's/repo";
import {
  AuthToken,
  CitiesData,
  CountriesData,
  LookupData,
} from '../../Store/Action';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function isValidPhoneNumber(phoneNumber, country) {
  try {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, country);
    if (phoneNumberObj && phoneNumberObj.isValid()) {
      return true; // Valid phone number format
    }
  } catch (error) {
    return false;
  }
  return false; // Invalid phone format
}

export const NoRecordFound = () => {
  return (
    <View
      style={{
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
        }}>
        no record found
      </Text>
    </View>
  );
};

export const setStorageItem = async (key, data) => {
  return AsyncStorage.setItem(key, JSON.stringify(data));
};

export const getStorageItem = async key => {
  const item = await AsyncStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return null;
};
