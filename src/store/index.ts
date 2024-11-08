import { configureStore } from '@reduxjs/toolkit';

import toolsReducer from './toolsSlice';
import darkModeReducer from './darkModeSlice';

const reducer = {
  tools: toolsReducer,
  darkMode: darkModeReducer,
};

const store = configureStore({
  reducer,
});

export type RootState = typeof reducer;

export default store;
