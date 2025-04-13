import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const StreetView = ({ latitude, longitude }) => {
  // Формируем URL для Google Street View
  const uri = `https://www.google.com/maps?q=&layer=c&cbll=${latitude},${longitude}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default StreetView;
