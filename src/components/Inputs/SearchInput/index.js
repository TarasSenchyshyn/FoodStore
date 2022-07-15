import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import debounce from 'lodash.debounce';

import {changeFilteredFood} from '../../../features/food/foodSlice';

import styles from './index.styled';

const SearchField = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  useEffect(() => {
    debouncedSetValue();

    return debouncedSetValue.cancel;
  }, [value, debouncedSetValue]);

  const debouncedSetValue = debounce(() => {
    dispatch(changeFilteredFood(value));
  }, 2000);

  const handleInputChange = val => {
    setValue(val);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Search by dish name..."
      value={value}
      onChangeText={handleInputChange}
    />
  );
};

export default SearchField;
