import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AuthSwitch from '../components/auth/AuthSwitch';
import CustomInput from '../components/auth/CustomInput';
import Auth from '../components/auth/Auth';
import SearchInput from '../components/SearchInput';
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import FilterPanel from '../components/FilterPanel';
import SearchWithFilter from '../components/SearchWithFilter';
import PlaceMiniCard from '../components/PlaceMiniCard';
import InputCustom from '../components/InputCustom';
import SurveyForm from '../components/Forms/SurveyForm';
import TravelStyleForm from '../components/Forms/TravelStyleForm';
import TravelStyleScreen from './forms/TravelScreen';
import ValuesAndInterestsForm from '../components/Forms/ValuesAndInterestsForm';
import { ScrollView } from 'react-native-gesture-handler';
import PlaceCardGame from '../components/PlaceCardGame';
import TopBar from '../components/TopBar';

import coin from "../assets/mingcute_coin-fill.png"
import IdealVacationText from '../components/IdealVacationText';
import BeachGallery from '../components/BeachGallery';
import StreetView from '../components/StreetView';
import MapWithMarker from '../components/MapWithMarker';
import StreetViewScreen from './StreetViewScreen';
import EventCard from '../components/EventCard';


export default function Test2() {

  const placesData = [
    {
      id: '1',
      name: 'Горный курорт',
      imageUrl: 'https://example.com/mountain-resort.jpg',
      weather: {
        temperature: '5°C',
      },
      rating: 4.5,
      tags: [
        { name: 'Горы' },
        { name: 'Отдых' },
        { name: 'Зима' },
      ],
      actionText: 'Забронировать',
      address: 'Кавказские горы, Россия',
    },
    {
      id: '2',
      name: 'Пляжный курорт',
      imageUrl: 'https://example.com/beach-resort.jpg',
      weather: {
        temperature: '28°C',
      },
      rating: 4.8,
      tags: [
        { name: 'Пляж' },
        { name: 'Лето' },
        { name: 'Отдых' },
      ],
      actionText: 'Забронировать',
      address: 'Турция, Анталия',
    },
    {
      id: '3',
      name: 'Городская гостиница',
      imageUrl: 'https://example.com/city-hotel.jpg',
      weather: {
        temperature: '15°C',
      },
      rating: 4.2,
      tags: [
        { name: 'Город' },
        { name: 'Комфорт' },
      ],
      actionText: 'Забронировать',
      address: 'Москва, Россия',
    },
  ];
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16,  }}>
        

        {/* <RadioGroup
          title="Можно с животными"
          options={[
            { label: 'даолдрлоjkhjk', value: 'yesdvddvdd' },
            { label: 'даолдрлоjkhjk', value: 'yesfe' },
            { label: 'даолдрлоjkhjk', value: 'yes' },
          ]}
        />

<CheckboxGroup
  title="Тип места"
  options={[
    { label: 'Развлечение', value: 'entertainment' },
    { label: 'Парк', value: 'park' },
    { label: 'Еда', value: 'food' },
    { label: 'Отели', value: 'hotels' }
  ]}
/> */}

      {/* <FilterPanel /> */}

      {/* <SearchWithFilter /> */}

      {/* <PlaceMiniCard tittle="Парк «Краснодар»" time="с 05:00 до 24:00" category="Развлечения" description="Современный парк с искусством, природой и местами для отдыха в самом сердце Краснодара." /> */}

      {/* <InputCustom placeholder="например 52" tittle="Возраст" /> */}

      {/* <SurveyForm /> */}

      {/* <TravelStyleForm /> */}

      {/* <ValuesAndInterestsForm /> */}

      {/* <ScrollView style={{ flex: 1 }}>
      {placesData.map((place) => (
        <PlaceCardGame key={place.id} place={place} />
      ))}
    </ScrollView> */}

    {/* <TopBar points={993} icon={coin}/> */}

    {/* <IdealVacationText /> */}

    {/* <BeachGallery /> */}

    {/* <MapWithMarker /> */}



    {/* <StreetViewScreen /> */}

    {/* <StreetViewScreen
      />    */}

<EventCard
                image={require('../assets/Image (9).png')} 
                title="Концерт 'Верь в себя'" 
                duration="1 день" 
                places={"4"} 
                rating={"4.8"} 
                />
    </View>
  );
}

const styles = StyleSheet.create({
  
})
