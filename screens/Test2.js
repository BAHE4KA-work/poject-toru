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

export default function Test2() {


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

      <PlaceMiniCard tittle="Парк «Краснодар»" time="с 05:00 до 24:00" category="Развлечения" description="Современный парк с искусством, природой и местами для отдыха в самом сердце Краснодара." />

    </View>
  );
}

const styles = StyleSheet.create({
  
})
