import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Linking } from 'react-native';

export default function MapWithMarker() {
  const latitude = 48.8584;
  const longitude = 2.2945;

  const openStreetView = () => {
    const url = `https://www.google.com/maps?q=&layer=c&cbll=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="Эйфелева башня"
          description="Смотреть в 360°"
          onCalloutPress={openStreetView}
        />
      </MapView>
      <Button title="Смотреть 360° обзор" onPress={openStreetView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
