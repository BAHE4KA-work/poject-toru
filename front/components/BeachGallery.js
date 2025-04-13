import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function BeachGallery() {
  return (
    <View style={styles.container}>
      {/* Левая колонка */}
      <View style={styles.leftColumn}>
        <Image source={require('../assets/image 861.png')} style={styles.smallImageTop} />
        <Image source={require('../assets/image 862.png')} style={styles.smallImageBottom} />
      </View>

      {/* Правая большая картинка */}
      <View style={styles.rightColumn}>
        <Image source={require('../assets/image 864.png')} style={styles.bigImage} />
        <Image source={require('../assets/Vector (1).png')} style={styles.wave} />
      </View>

      {/* Декор: волны снизу */}
      {/* Декор: точечки */}
      <Image source={require('../assets/Frame 1000003395 (1).png')} style={styles.dotsTopRight}></Image>
      <Image source={require('../assets/Frame 1000003395 (1).png')} style={styles.squareLeftTop}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      position: 'relative',
      gap: 12 * vw,
    },
    leftColumn: {
      width: '48%',
      justifyContent: 'space-between',
    },
    rightColumn: {
      width: '48%',
      gap: "9%"
    },
    smallImageTop: {
        width: 170 * vw,
        height: 168 * vw,
      borderRadius: 16,
      marginBottom: 12 * vw,
      zIndex: 1,
    },
    smallImageBottom: {
      width: 169 * vw,
      height: 229 * vw,
      borderRadius: 16,
    },
    bigImage: {
      width: 156 * vw,
      height: 330 * vw,
      borderRadius: 16,
    },
    wave: {
    //   position: 'absolute',
    //   bottom: -10,
    //   left: '25%',
      width: 156 * vw,
      height: 40 * vw,
    },
    dotsTopRight: {
        zIndex: 10,
      position: 'absolute',
      zIndex: 10,
      top: -20 * vw,
      right: 7 * vw,
      width: 50 * vw,
      height: 50 * vw,
    },
    squareLeftTop: {
      position: 'absolute',
      top: 123 * vw,
      left: 125 * vw,
      width: 50 * vw,
      height: 50 * vw,
      zIndex: 0,
      
    }
  });
  