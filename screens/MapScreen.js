// --- components/MapScreen.js ---

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Map from '../components/Map/Map';
import SearchWithFilter from '../components/SearchWithFilter';
import { fetchORSRoute } from '../components/fetchORSRoute';

const { height } = Dimensions.get('window');
const ORS_API_KEY = '5b3ce3597851110001cf62488e9c948720894b36b3bce1c8c98df6fd';

export default function MapScreen() {
  const routePoints = [
    { latitude: 45.035470, longitude: 38.975313 },
    { latitude: 45.037000, longitude: 38.976500 },
    { latitude: 45.038500, longitude: 38.979000 },
  ];

  const [routePolyline, setRoutePolyline] = useState([]);
  const [mapScrollable, setMapScrollable] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const polyline = await fetchORSRoute(routePoints, ORS_API_KEY);
        setRoutePolyline(polyline);
      } catch (err) {
        console.warn('Ошибка при построении маршрута:', err.message);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Map
        routePoints={routePoints}
        routePolyline={routePolyline}
        showUser={false}
        scrollEnabled={mapScrollable}
        zoomEnabled={mapScrollable}
      />

      <View style={styles.searchContainer}>
        <SearchWithFilter setMapScrollable={setMapScrollable} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  }
});
