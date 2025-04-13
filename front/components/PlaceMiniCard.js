import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CustomButton from './CustomButton';
import PointsBadge from './PointsBadge';
import starIcon from '../assets/Frame 767.png';       // звезда для рейтинга
import wifiIcon from '../assets/Property 1=Variant6.png';   // иконка сигнала
import arrowIcon from '../assets/arrow-right.png';
import coinIcon from '../assets/bxs-coin.png';
import parkImage from '../assets/image 1.png';   // изображение парка

const { width } = Dimensions.get('window');
const vw = width / 390;

export default function PlaceMiniCard({tittle, time, category, description}) {
  return (
    <View style={styles.cont}>
        <Image source={parkImage} style={styles.image} />
        <View style={styles.line}></View>
        <View style={styles.badge}>
                <PointsBadge points={10} icon={coinIcon} />
        </View>
        <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                {/* <Image source={parkImage} style={styles.image} /> */}
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{tittle}</Text>

                <View style={styles.row}>
                    <Image source={wifiIcon} style={styles.ratingIcon} />
                    <Text style={styles.ratingText}>5.0</Text>
                </View>

                <View style={styles.row}>
                <Image source={starIcon} style={styles.ratingIcon} />
                <Text style={styles.ratingText}>4.0</Text>
                </View>

                <View style={styles.metaText}>
                    <Text style={styles.text}>{time}</Text>
                    <Text style={styles.text}>{category}</Text>
                </View>
                <Text style={styles.description}>
                    {description}
                </Text>

                <CustomButton
                title="Перейти"
                imageSource={arrowIcon}
                showImage={true}
                onPress={() => alert('Переход к парку')}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    cont: {
        zIndex: 2,
        width: "100%",
    },
  wrapper: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24 * vw,
    borderTopRightRadius: 24 * vw,
    paddingHorizontal: 24 * vw,
    gap: 16 * vw,
    paddingBottom: 24 * vw,
  },
  imageWrapper: {
    position: 'relative'
  },
  image: {
    width: "100%",
    position: "absolute",
    height: 210 * vw,
    borderTopLeftRadius: 16 * vw,
    borderTopRightRadius: 16 * vw,
    resizeMode: 'cover',
    top: "-60%",
  },
  line: {
    position: "absolute",
    top: "-57.5%",
    left: "32%",
    width: 134 * vw,
    height: 4 * vw,
    zIndex: 3,
    borderRadius: 100,
    backgroundColor: "#00000099",
  },
  badge: {
    position: 'absolute',
    top: "-53%",
    right: "8%",
    zIndex: 2
  },
  content: {
    gap: 12 * vw
  },
  title: {
    color: '#282B33',
    fontSize: 24 * vw,
    fontWeight: '700',
    fontFamily: 'Inter'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6 * vw
  },
  ratingIcon: {
    width: 90 * vw,
    height: 24 * vw,
    resizeMode: 'contain'
  },
  ratingText: {
    fontSize: 16 * vw,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#282B33'
  },
  metaText: {
    flexDirection: "row",
    color: '#999EA4',
    fontSize: 16 * vw,
    fontWeight: '500',
    fontFamily: 'Inter',
    gap: "5%",
  },
  text: {
    color: '#999EA4',
    fontSize: 16 * vw,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  description: {
    fontSize: 16 * vw,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: '#000'
  }
});
