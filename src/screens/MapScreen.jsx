import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import Header from '../components/Header';

const MapScreen = ({route}) => {

  const { location = null } = route.params;

  return (
    <View style={styles.container}>
      <Header style={styles.header} title="Mi ubicación" />
      <MapView 
        pointerEvents={true} 
        showsUserLocation={true}
        region= {{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }}
      style={styles.map} />
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
  },
  map: {
    flex: 0.85,
    width: '100%',
    height: '100%',
  },
});