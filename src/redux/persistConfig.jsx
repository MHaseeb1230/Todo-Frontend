/* eslint-disable import/no-extraneous-dependencies */
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // reducers you want to persist
};

export default persistConfig;
