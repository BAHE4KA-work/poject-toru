import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const StreetViewScreen = () => (
  <View style={styles.container}>
  {/* <WebView
  source={{ uri: 'https://egoska123.github.io/streetview/' }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  startInLoadingState={true}
  originWhitelist={['*']}
  onError={(syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.warn('WebView error: ', nativeEvent);
  }}
  onHttpError={(syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.warn('WebView HTTP error: ', nativeEvent);
  }}
  onLoadProgress={({ nativeEvent }) => {
    console.log('Loading progress: ', nativeEvent.progress);
  }}
  style={{ flex: 1 }}
/> */}  

<WebView
  source={{ html: '<html><body><h1>Hello, World!</h1></body></html>' }}
  style={{ flex: 1 }}
/>



  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default StreetViewScreen