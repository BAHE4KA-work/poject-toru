import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native';

import RatingSelector from './StarRating'; // обновлённая звёздная оценка
import CustomButton from './CustomButton';
import ReviewInput from './ReviewInput';
import PointsBadge from './PointsBadge'; // ← твой новый компонент

import arrow from '../assets/check (1).png';
import coin from '../assets/bxs-coin (1).png';
import photo from '../assets/image 1.png';
import close from '../assets/x (2).png'; // иконка крестика

const { width: screenWidth } = Dimensions.get('window');
const vw = screenWidth / 390;

export default function PlaceReviewCard({ onClose }) {
  const [review, setReview] = useState('');
  const [ratingPlace, setRatingPlace] = useState(2);
  const [ratingInternet, setRatingInternet] = useState(4);

  const isValid = ratingPlace > 0 && ratingInternet > 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={photo} style={styles.image} />

        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Image source={close} style={styles.closeIcon} />
        </TouchableOpacity>

        <View style={styles.pointsBadge}>
          <PointsBadge points={10} icon={coin} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Парк «Краснодар»</Text>

        <View style={{ marginTop: 8 * vw, paddingLeft: 8 * vw }}>
          <Text style={styles.sectionLabel}>
            Оценка места <Text style={styles.required}>*</Text>
          </Text>
          <RatingSelector initial={ratingPlace} onChange={setRatingPlace} />
        </View>

        <View style={{ marginTop: 8 * vw, paddingLeft: 8 * vw  }}>
          <Text style={styles.sectionLabel}>
            Скорость интернета <Text style={styles.required}>*</Text>
          </Text>
          <RatingSelector initial={ratingInternet} onChange={setRatingInternet} />
        </View>

        <ReviewInput
          label="Отзыв"
          placeholder="Оставьте отзыв"
          value={review}
          onChangeText={setReview}
        />

        <Text style={styles.address}>
          Адрес: Россия, Краснодар, улица Разведчика Леонова, 1
        </Text>

        <View style={{ marginTop: 20 * vw }}>
          <CustomButton
            title="Отметить"
            onPress={() => alert('Оценка отправлена!')}
            imageSource={arrow}
            showImage={true}
          />
        </View>

        {!isValid && (
          <Text style={styles.notice}>
            Чтобы активировать кнопку заполните поля: место, сеть.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    borderRadius: 16 * vw,
    paddingBottom: 16 * vw,
    borderWidth: 1,
    borderColor: "rgba(118, 121, 130, 0.60)"
  },
  imageWrapper: {
    position: 'relative'
  },
  image: {
    width: '100%',
    height: 268 * vw,
    borderRadius: 16 * vw,
    resizeMode: 'cover',

  },
  closeBtn: {
    position: 'absolute',
    top: 12 * vw,
    left: 12 * vw,
    backgroundColor: '#FFF',
    width: 28 * vw,
    height: 28 * vw,
    borderRadius: 14 * vw,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon: {
    width: 28 * vw,
    height: 28 * vw
  },
  pointsBadge: {
    position: 'absolute',
    top: 12 * vw,
    right: 12 * vw
  },
  content: {
    paddingHorizontal: 16 * vw,
    paddingTop: 8 * vw,
    gap: 8 * vw
  },
  title: {
    fontSize: 24 * vw,
    fontWeight: '700',
    fontFamily: 'Inter',
    textAlign: 'center',
    color: '#000'
  },
  sectionLabel: {
    fontSize: 16 * vw,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: '#282B33'
  },
  required: {
    color: '#FF0000'
  },
  address: {
    marginTop: -12 * vw,
    fontSize: 12 * vw,
    color: '#000',
    fontFamily: 'Inter',
    textAlign: 'left'
  },
  notice: {
    marginTop: 8 * vw,
    fontSize: 10 * vw,
    color: '#767982',
    textAlign: 'center'
  }
});
