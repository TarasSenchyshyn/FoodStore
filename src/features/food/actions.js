import axios from '../../axios';
import {endpoints} from '../../constants/endpoints';
import {submitFoodData} from './foodSlice';

export const fetchFood = (size = 30) => {
  return async dispatch => {
    try {
      const response = await axios.get(endpoints.randomFood + `?size=${size}`);

      dispatch(submitFoodData(response.data));
    } catch (error) {
      console.log(error, 'fetchFood api error');
    }
  };
};
