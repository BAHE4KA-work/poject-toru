import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import AuthSwitch from './AuthSwitch';
import CustomInput from './CustomInput';
import CustomButton from '../CustomButton';
import { useTranslation } from 'react-i18next';


const { width } = Dimensions.get('window');
const vw = width / 390;

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState(''); // 🔥
  const [language, setLanguage] = useState('ru');
  const [mode, setMode] = useState('login'); // 🔥

  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>W T F</Text>

      <AuthSwitch onTabChange={setMode} /> {/* 🔥 изменяет состояние */}

      <CustomInput
        placeholder={t('auth.email')}
        icon={require('../../assets/email-outline.png')}
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder={t('auth.password')}
        icon={require('../../assets/key-outline.png')}
        value={password}
        onChangeText={setPassword}
        isPassword={true}
      />

      {/* 🔥 Поле появляется только при регистрации */}
      {mode === 'register' && (
        <CustomInput
          placeholder={t('auth.repeat_password')}
          icon={require('../../assets/lock-outline.png')}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          isPassword={true}
        />
      )}

      <CustomButton
        title={mode === 'register' ? t('auth.singup') : t('auth.continue')}
        imageSource={require('../../assets/login.png')}
        showImage={true}
        style={{ width: '100%' }}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>
          {mode === 'register' ? t('auth.help'): t('auth.forgot')} {/* 🔥 */}
        </Text>
      </TouchableOpacity>

      <View style={styles.languageLine}>
        <View style={styles.line} />
        <Text style={styles.langText}>{t('auth.language')}</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.langButtons}>
        <TouchableOpacity onPress={() => {setLanguage('ru'); i18n.changeLanguage('ru');}}>
          <Image
            source={require('../../assets/image (5).png')}
            style={[
              styles.flag,
              language === 'ru' && styles.activeFlag
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setLanguage('en'); i18n.changeLanguage('en');}}>
          <Image
            source={require('../../assets/image (6).png')}
            style={[
              styles.flag,
              language === 'en' && styles.activeFlag
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 26 * vw,
    gap: 20 * vw,
    borderRadius: 32 * vw,
    borderWidth: 1,
    borderColor: '#DADADA',
    backgroundColor: '#EBEBEB',
    margin: 16 * vw,
    width: '100%',
    alignItems: "center",
  },
  logo: {
    width: 133 * vw,
    height: 52 * vw,
    textAlign: 'center',
    fontSize: 18 * vw,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: '#FFF',
    marginBottom: 8 * vw,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "4%",
    backgroundColor: "#658F47",
    borderRadius: 20 * vw,
  },
  forgot: {
    color: '#658F47',
    fontSize: 14 * vw,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '400'
  },
  languageLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 * vw,
    marginTop: 8 * vw
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#999EA4'
  },
  langText: {
    fontSize: 14 * vw,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#999EA4'
  },
  langButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20 * vw,
    marginTop: 8 * vw
  },
  flag: {
    width: 40 * vw,
    height: 40 * vw,
    borderRadius: 20 * vw,
    borderWidth: 0
  },
  activeFlag: {
    borderColor: '#658F47',
    borderWidth: 2
  }
});
