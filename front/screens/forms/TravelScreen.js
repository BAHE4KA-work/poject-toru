import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';

import CustomButton from '../../components/CustomButton';

import arrowIcon from '../../assets/arrow-right.png';
import toughts from '../../assets/metrix (1).png';
import background from '../../assets/Ank1.png';
import TravelStyleForm from '../../components/Forms/TravelStyleForm';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const vw = width / 390;

export default function TravelStyleScreen({ onSkip, onSubmit }) {

    const navigation = useNavigation();
    
  return (
    <ImageBackground source={background} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        {/* Пропустить */}
        <TouchableOpacity onPress={onSkip} style={styles.skipBtn}>
          <Text style={styles.skipText} onPress={() => navigation.navigate('ValuesAndInterestsScreen')}>Пропустить</Text>
        </TouchableOpacity>

        {/* Форма стиля путешествий */}
        <View style={styles.formWrapper}>
          <TravelStyleForm />
        </View>

        {/* Декоративный элемент */}
        <Image source={toughts} style={{ width: 66 * vw, height: 10 * vw }} />

        {/* Кнопка Далее */}
        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Далее"
            imageSource={arrowIcon}
            onPress={() => navigation.navigate('ValuesAndInterestsScreen')}          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 16 * vw,
    alignItems: 'center',
    gap: 12 * vw,
  },
  skipBtn: {
    alignSelf: 'flex-end',
  },
  skipText: {
    color: '#767982',
    fontFamily: 'Raleway',
    fontSize: 16 * vw,
    fontWeight: '600',
    lineHeight: 18.7 * vw,
  },
  formWrapper: {
    width: '100%',
    borderRadius: 16 * vw,
    backgroundColor: 'rgba(235, 235, 235, 0.80)',
    padding: 16 * vw,
    gap: 12 * vw,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 8 * vw
  }
});
