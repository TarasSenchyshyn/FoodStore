import React from 'react';

import {StackActions} from '@react-navigation/native';

export const NavigationRef = React.createRef();

export const GoBack = () => {
  if (NavigationRef) {
    return NavigationRef.current?.goBack();
  }
};
export const Navigate = (name, params = {deeplinkID: null}) => {
  if (NavigationRef) {
    NavigationRef.current?.navigate(name, params);
  }
};

export const Replace = (name, params) => {
  NavigationRef.current?.dispatch?.(StackActions.replace(name, params));
};

export const Dispatch = (...rest) => {
  NavigationRef.current?.dispatch?.(...rest);
};

export const PopToTop = () => {
  NavigationRef.current?.dispatch(StackActions.popToTop());
};
