import {StyleSheet} from 'react-native';

import {colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
  },
});
