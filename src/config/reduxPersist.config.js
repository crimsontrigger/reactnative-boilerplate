import AsyncStorage from '@react-native-community/async-storage';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: [], // Add the reducers that you don't wanna persist.
    whitelist: ['auth'], // Add the reducers which you wanna persist, for eg., AuthReducer
  },
};

export default REDUX_PERSIST;
