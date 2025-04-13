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



import arrowIcon from '../../assets/arrow-right.png';
import InputCustom from '../../components/InputCustom';
import RadioGroup from '../../components/RadioGroup';
import CustomButton from '../../components/CustomButton';
import toughts from "../../assets/metrix.png"
import background from '../../assets/Ank1.png';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const vw = width / 390;

export default function SurveyScreen({ onSkip, onSubmit }) {

    const navigation = useNavigation();
    
  return (
    <ImageBackground source={background}>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Пропустить */}
      <TouchableOpacity onPress={onSkip} style={styles.skipBtn}>
        <Text style={styles.skipText} onPress={() => navigation.navigate('TravelStyleScreen')}>Пропустить</Text>
      </TouchableOpacity>

      {/* Анкета */}
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Анкета</Text>

        <InputCustom tittle="Возраст" placeholder="Например 52" />

        <InputCustom tittle="Тип питания" placeholder="Например вегетарианское" />

        <InputCustom tittle="Предпочтения в еде" placeholder="Например уличная еда; кафе" />

        <RadioGroup
          title="Уровень физической активности"
          options={[
            { label: 'Низкий', value: 'low' },
            { label: 'Средний', value: 'medium' },
            { label: 'Высокий', value: 'high' }
          ]}
        />

        <InputCustom tittle="Ограничения по здоровью" placeholder="Например проблемы с сердцем" />

        <RadioGroup
          title="Путешествуете ли с домашними животными"
          options={[
            { label: 'Да', value: 'yes' },
            { label: 'Нет', value: 'no' }
          ]}
        />

        <InputCustom tittle="Язык" placeholder="Например русский" />
      </View>

      <Image source={toughts} style={{width: 66 * vw, height: 10 * vw}}>

      </Image>

      {/* Кнопка Далее */}
      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Далее"
          imageSource={arrowIcon}
          onPress={() => navigation.navigate('TravelStyleScreen')}
        />
      </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
  title: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Raleway',
    fontSize: 24 * vw,
    fontWeight: '600',
    letterSpacing: -0.408 * vw
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 8 * vw
  }
});
