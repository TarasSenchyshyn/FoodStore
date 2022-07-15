import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import FoodItem from '../../components/FoodItem';
import SearchField from '../../components/Inputs/SearchInput';
import Separator from '../../components/Separator';

import {fetchFood} from '../../features/food/actions';
import {filteredFoodListSelector} from '../../features/food/selectors';

import styles from './index.styled';

const FoodList = () => {
  const dispatch = useDispatch();

  const foodList = useSelector(filteredFoodListSelector);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    dispatch(fetchFood());

    setIsRefreshing(false);
  };

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  const keyExtractor = item => item.id;

  const renderFoodItem = useCallback(
    ({item}) => <FoodItem item={item} key={item.id} />,
    [],
  );

  const renderSeparator = () => <Separator />;

  return (
    <View style={styles.wrapper}>
      <SearchField />

      <FlatList
        data={foodList}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={renderFoodItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default FoodList;
