import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './index.styled';

const Button = ({type = 'default', text = '', onPress}) => (
  <TouchableOpacity style={styles.button(type)} onPress={onPress}>
    <Text style={styles.buttonText(type)}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
