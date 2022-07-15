import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  food: [],
  filteredFood: [],
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    submitFoodData: (state, {payload}) => {
      state.food = payload;
      state.filteredFood = payload;
    },
    changeFood: (state, {payload}) => {
      state.food = state.food.map(foodItem => {
        if (foodItem.id === payload.id) {
          return {...foodItem, ...payload};
        }

        return foodItem;
      });

      state.filteredFood = state.filteredFood.map(foodItem => {
        if (foodItem.id === payload.id) {
          return {...foodItem, ...payload};
        }

        return foodItem;
      });
    },
    changeFilteredFood: (state, {payload}) => {
      if (!payload) {
        state.filteredFood = state.food;
        return;
      }

      state.filteredFood = state.food.filter(foodItem => {
        return foodItem.dish.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});

export const {submitFoodData, changeFood, changeFilteredFood} =
  foodSlice.actions;

export default foodSlice.reducer;
