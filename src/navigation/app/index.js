import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NavigationRef} from '../NavigationService';
import HomeStack from '../home';

const AppNavigation = () => {
  return (
    <NavigationContainer ref={NavigationRef}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
