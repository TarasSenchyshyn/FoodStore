import {combineReducers, configureStore} from '@reduxjs/toolkit';

import foodReducer from '../features/food/foodSlice';

const rootReducer = combineReducers({
  food: foodReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
