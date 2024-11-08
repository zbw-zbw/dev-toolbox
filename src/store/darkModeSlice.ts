import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: false,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      document.documentElement.classList.toggle('dark');
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;

export const selectIsDarkMode = (state: { darkMode: DarkModeState }) => state.darkMode.isDarkMode;

export default darkModeSlice.reducer;
