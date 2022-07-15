import {StyleSheet} from 'react-native';

import {colors} from '../../theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  container: {
    flex: 0.85,
  },
  footer: {
    flex: 0.15,
  },
  input: isEdit => ({
    backgroundColor: isEdit ? colors.white : colors.gray,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  }),
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.blue,
    marginBottom: 5,
  },
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
