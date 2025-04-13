import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';

const StreetViewEmbed1 = ({ lat, lng, heading = 165, pitch = 0, zoom = 1 }) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          html, body { height: 100%; margin: 0; padding: 0; }
          #pano { height: 100%; width: 100%; }
        </style>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyANYtsM-aZ4zI6cJsiaqUtZguw79KnclAQ"></script>
      </head>
      <body>
        <div id="pano"></div>
        <script>
          function init() {
            var panorama = new google.maps.StreetViewPanorama(
              document.getElementById('pano'),
              {
                position: { lat: ${lat}, lng: ${lng} },
                pov: { heading: ${heading}, pitch: ${pitch} },
                zoom: ${zoom}
              }
            );
          }
          window.onload = init;
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default StreetViewEmbed1;
