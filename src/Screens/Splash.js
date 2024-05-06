import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
// import SvgUri from 'react-native-svg-uri';
import {SplashBg, SplashLogo} from '../assets';
// import {useSelector, useDispatch} from 'react-redux';

export default function Splash({navigation}) {
  // const dispatch = useDispatch();
  // const authToken = useSelector(state => state.AuthToken);
  var {height, width} = Dimensions.get('window');

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Dashboard');
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  //   AsyncStorage.getItem('isFirstTimeRunApp')
  //     .then(res => {
  //       if (!isNullOrEmpty(res)) {
  //         LoginCheck();
  //       } else {
  //         setTimeout(() => {
  //           goToRespectivePage('OnBoarding1');
  //         }, 3000);
  //       }
  //     })
  //     .catch(err => {
  //       setTimeout(() => {
  //         goToRespectivePage('OnBoarding1');
  //       }, 3000);
  //     });
  // });

  // const LoginCheck = async () => {
  //   if (isNullOrEmpty(authToken)) {
  //     goToRespectivePage('PhoneRegistration');
  //   } else {
  //     try {
  //       const res = await makeRequest({
  //         url: SessionCheckApiCall,
  //         method: 'POST',
  //         authToken: authToken,
  //       });
  //       if (res.error_code === ErrorCode.success) {
  //         goToRespectivePage('Dashboard');
  //       } else if (res.error_code === ErrorCode.token_invalid) {
  //         goToRespectivePage('PhoneRegistration');
  //       } else {
  //         handleErrorResponse(res, dispatch);
  //       }
  //     } catch (error) {
  //       goToRespectivePage('PhoneRegistration');
  //       console.log('error', error);
  //     }
  //   }
  // };

  // function goToRespectivePage(name) {
  //   navigation.replace(name);
  // }

  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#405052',
      }}>
      <SplashLogo />
    </View>
  );
}
