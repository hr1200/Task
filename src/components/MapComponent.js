import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {isNullOrEmpty} from '../utils/text-utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {BLACK, PRIMARY, WHITE} from '../utils/colors';
import {Pin} from '../assets';
import LottieView from 'lottie-react-native';

const MapComponent = ({height, isLottie, navigation}) => {
  const mapRef = useRef(null);
  const [forceRefresh, setForceRefresh] = useState(0);
  let [addressRegion, setAddressRegion] = useState();

  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  let [isLocation, setIsLocation] = useState('');

  useEffect(() => {
    getCurrentLocation();
  }, [navigation]);

  // useEffect(() => {
  //   animateToAddress();
  // }, [addressRegion]);

  // const getAddress = position => {
  //   Geocoder.from(position.latitude, position.longitude)
  //     .then(json => {
  //       // setLocationAddress(json.results[0].formatted_address);
  //       let Array = json.results[0].address_components;
  //       for (var i = 0; i < Array.length; i++) {
  //         let element = Array[i];
  //         if (element.types.includes('locality')) {
  //           setCity((city = element.long_name));
  //         }
  //       }
  //     })
  //     .catch(error => {
  //       console.log('err', error);
  //     });
  // };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('position', position);
        // getAddress(position.coords);
        if (mapRef.current) {
          let userLocation = {
            latitude: parseFloat(
              position.latitude ? position.latitude : position.coords.latitude,
            ),
            longitude: parseFloat(
              position.longitude
                ? position.longitude
                : position.coords.longitude,
            ),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          };
          // setLocation(position);
          mapRef.current.animateToRegion(userLocation, 2000);
        }
      },
      error => {
        console.log('error', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 55000},
    );
  };

  const onRegionChangeComplete = e => {
    // setLocation(e);
    setForceRefresh(Math.floor(Math.random() * 100));
  };

  const handleGeocode = async () => {
    try {
      const response = await Geocoder.from(isLocation);
      const result = response.results[0].geometry.location;
      setAddressRegion((addressRegion = result));
    } catch (error) {
      console.error('Error geocoding address:', error);
    }
  };

  // const animateToAddress = () => {
  //   if (mapRef && !isNullOrEmpty(addressRegion)) {
  //     let userLocation = {
  //       latitude: parseFloat(addressRegion.lat),
  //       longitude: parseFloat(addressRegion.lng),
  //       latitudeDelta: 0.015,
  //       longitudeDelta: 0.0121,
  //     };
  //     mapRef.current.animateToRegion(userLocation, 500);
  //   }
  // };

  return (
    <View
      style={{
        height: height ? height : '55%',
        borderRadius: 25,
        overflow: 'scroll',
      }}>
      <TouchableOpacity
        onPress={() => {
          getCurrentLocation();
        }}
        style={{
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
          position: 'absolute',
          bottom: -10,
          right: 10,
          zIndex: 555,
          backgroundColor: BLACK,
          height: 50,
          width: 50,
        }}>
        <FontAwesome5 name="location-arrow" size={25} color={WHITE} />
      </TouchableOpacity>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        onMapReady={() => getCurrentLocation()}
        followUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsPointsOfInterest={true}
        showsBuildings={true}
        zoomEnabled={true}
        scrollEnabled={true}
        showsScale={true}
        onRegionChangeComplete={region =>
          onRegionChangeComplete(region)
        }></MapView>
      <View style={styles.pinImageWrapper}>
        {!isLottie ? (
          <Image source={Pin} style={styles.pinImageStyle} />
        ) : (
          <>
            <LottieView
              source={require('../assets/pinloc1.json')}
              autoPlay
              loop
              style={{height: 100, width: 100}}
            />
            <View
              style={{
                backgroundColor: PRIMARY,
                height: 16,
                width: 16,
                borderRadius: 8,
                position: 'absolute',
                right: 42,
                top: 42,
              }}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  pinImageWrapper: {
    position: 'absolute',
    top: '45%',
    alignSelf: 'center',
  },
  pinImageStyle: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 45,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: PRIMARY,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 5,
    color: BLACK,
  },
});
