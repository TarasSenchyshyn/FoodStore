import {StyleSheet} from 'react-native';

import {colors} from '../../theme';

export default StyleSheet.create({
  button: (type = 'default') => ({
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: type === 'success' ? colors.green : colors.black,
    marginBottom: 10,
  }),
  buttonText: (type = 'default') => ({
    fontSize: 18,
    fontWeight: '500',
    color: type === 'success' ? colors.black : colors.white,
  }),
});
