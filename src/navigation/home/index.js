import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {commonOptions} from '../configs';
import {HomeScreenNames} from './ScreenNames';

import FoodList from '../../screens/FoodList';
import FoodDetails from '../../screens/FoodDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={HomeScreenNames.FoodList}>
      <Stack.Screen
        name={HomeScreenNames.FoodList}
        component={FoodList}
        options={{...commonOptions, title: 'Food list'}}
      />

      <Stack.Screen
        name={HomeScreenNames.FoodDetails}
        component={FoodDetails}
        options={{...commonOptions, title: 'Food details'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
