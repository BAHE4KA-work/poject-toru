import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import PlaceMiniCard from '../PlaceMiniCard';

const { height } = Dimensions.get('window');
const PANEL_TOP = height / 1.69;

export default function MapWithCard({ routePoints = [], routePolyline = [], showUser = false, userLocation = null }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [slideAnim] = useState(new Animated.Value(height));

  const openCard = (marker) => {
    setSelectedMarker(marker);
    Animated.timing(slideAnim, {
      toValue: PANEL_TOP,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  const closeCard = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false
    }).start(() => setSelectedMarker(null));
  };

  if (!routePoints.length) {
    return <View style={styles.container}><Text>Нет маршрута для отображения</Text></View>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: routePoints[0].latitude,
          longitude: routePoints[0].longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={showUser}
        followsUserLocation={showUser}
      >
        {routePoints.map((point, index) => (
          <Marker
            key={index}
            coordinate={point}
            title={`Точка ${index + 1}`}
            onPress={() => openCard(point)}
          />
        ))}

        {routePolyline.length > 0 && (
          <Polyline
            coordinates={routePolyline}
            strokeColor="#007AFF"
            strokeWidth={4}
          />
        )}

        {showUser && userLocation && (
          <Marker
            coordinate={userLocation}
            title="Вы находитесь здесь"
            pinColor="green"
          />
        )}
      </MapView>

      {selectedMarker && (
        <>
          <TouchableWithoutFeedback onPress={closeCard}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          <Animated.View style={[styles.bottomSheet, { top: slideAnim }]}> 
            <PlaceMiniCard
              tittle="Парк Краснодар"
              time="с 05:00 до 24:00"
              category="Развлечения"
              description="Современный парк с искусством, природой и местами для отдыха в самом сердце Краснодара."
            />
          </Animated.View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 10,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
