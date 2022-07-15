import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {HomeScreenNames} from '../../navigation/home/ScreenNames';
import {Navigate} from '../../navigation/NavigationService';

import styles from './index.styled';

const FoodItem = ({item}) => {
  const {dish} = item;

  const handleFoodItemPress = () => {
    Navigate(HomeScreenNames.FoodDetails, {item});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleFoodItemPress}
      activeOpacity={0.7}>
      <Text style={styles.title}>{dish}</Text>
    </TouchableOpacity>
  );
};

export default FoodItem;
