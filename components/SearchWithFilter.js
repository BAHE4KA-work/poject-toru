import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import SearchInput from './SearchInput';
import FilterPanel from './FilterPanel';

const { height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 390;
const PANEL_TOP = height / 3.9;

export default function SearchWithFilter() {
  const [filterVisible, setFilterVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current;

  const openPanel = () => {
    setFilterVisible(true);
    Animated.timing(slideAnim, {
      toValue: PANEL_TOP,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  const closePanel = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      setFilterVisible(false);
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      // только если пользователь начал двигаться вниз
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 10,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          slideAnim.setValue(PANEL_TOP + gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 80 || gestureState.vy > 1) {
          closePanel();
        } else {
          openPanel();
        }
      }
    })
  ).current;

  return (
    <View style={styles.wrapper}>
      <SearchInput onFilterPress={openPanel} />

      {filterVisible && (
        <TouchableWithoutFeedback onPress={closePanel}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
      )}

      {filterVisible && (
        <Animated.View
          style={[styles.panelWrapper, { top: slideAnim }]}
          {...panResponder.panHandlers}
        >
          <FilterPanel />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 60 * vw,
    paddingHorizontal: 16 * vw
  },
  panelWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#F6F6F9',
    borderTopLeftRadius: 16 * vw,
    borderTopRightRadius: 16 * vw,
    elevation: 10
  },
  backdrop: {
    paddingBottom: -50, 
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
});
