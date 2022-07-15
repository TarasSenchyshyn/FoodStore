import React, {useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

import {Navigate} from '../../navigation/NavigationService';
import {HomeScreenNames} from '../../navigation/home/ScreenNames';
import {changeFood} from '../../features/food/foodSlice';

import styles from './index.styled';
import Button from '../../components/Button';

const FoodDetails = () => {
  const {params: {item} = {}} = useRoute();
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const [dish, setDish] = useState('');

  useEffect(() => {
    setDish(item.dish);
  }, [item]);

  const handleEditPress = () => setIsEdit(prev => !prev);

  const handleSavePress = () => {
    dispatch(
      changeFood({
        ...item,
        dish,
      }),
    );

    Navigate(HomeScreenNames.FoodList);

    Snackbar.show({
      text: `Previous dish name: ${item.dish} \n\nNew dish name: ${dish}`,
      numberOfLines: 3,
      duration: Snackbar.LENGTH_LONG,
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.label}>Dish</Text>
        <TextInput
          style={styles.input(isEdit)}
          defaultValue={dish}
          onChangeText={value => setDish(value)}
          editable={isEdit}
        />

        <Text style={styles.label}>Ingredient</Text>
        <TextInput
          style={styles.input()}
          defaultValue={item.ingredient}
          editable={false}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input()}
          defaultValue={item.description}
          multiline={true}
          editable={false}
        />
      </View>

      <View style={styles.footer}>
        <Button text="Edit" type="default" onPress={handleEditPress} />

        <Button text="Save" type="success" onPress={handleSavePress} />
      </View>
    </View>
  );
};

export default FoodDetails;
