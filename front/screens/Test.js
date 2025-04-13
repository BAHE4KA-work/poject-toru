import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PlaceButton from '../components/CustomButton';

import axios from 'axios';

import arrow from "../assets/arrow-down-right.png"
import PlaceCard from '../components/PlaceCard';
import ReviewInput from '../components/ReviewInput';
import StarRating from '../components/StarRating';
import PlaceReviewCard from '../components/PlaceReviewCard';
import PointsBadge from '../components/PointsBadge';
import PlaceCardSwitcher from '../components/PlaceCardSwitcher';


export default function Test() {

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    const data = [
      {
        label: "Парк «Краснодар»",
        address: "Россия, Краснодар, улица Разведчика Леонова, 1",
        time: "05:00–24:00",
        category: "Парк",
        description: "Современный городской парк с ландшафтным дизайном и стадионом",
        internet_mark: 4,
        mark: 5,
        lat: 45.035,
        long: 38.975,
        menu_lang: "ru",
        tip: "Лучшее время для посещения — вечер"
      }
    ];
    

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
              const response = await axios.get('https://2bfb-125-15-62-53.ngrok-free.app/places/ru');
              setPlaces(response.data);
            } catch (error) {
              console.error('Ошибка при получении данных:', error.message);
            } finally {
              setLoading(false); // 👈 выключаем загрузку после завершения запроса
            }
          };

        fetchPlaces();
      }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 8, backgroundColor: "#214449", }}>
      {/* <PlaceButton
  title="Я тут был"
  onPress={() => alert('Нажато!')}
  imageSource={arrow}
  showImage={true}
/> */}

    {/* <RatingSelector />
    <RatingSelector variant="blue" /> */}

    <PlaceCardSwitcher data={data}/>

    {/* <PointsBadge points={10} icon={require('../assets/bxs-coin.png')} /> */}


    {/* {loading ? (
        <ActivityIndicator size="large" color="#31C2B1" />
      ) : (
        <PlaceCard data={places} />
      )} */}

    {/* <PlaceCard data={data} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  
})
