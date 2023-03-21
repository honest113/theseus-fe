import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_TOKEN_NAME } from '../../../constants/constants'
import setAuthToken from '../../../utils/setAuthToken';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    user: null
  },
  reducers: {
    loadUser: (state) => {
      const token = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if(token) {
        setAuthToken(token)
        state.isAuthenticated = true
      }
    },
    login: (state) => {
      try {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          "access_token"
        );
        state.isAuthenticated = true;
        // state.isLoading = true;
        // setInterval(() => {
        //   state.isLoading = false;
        // }, 3000);
      } catch (error) {
        console.log(error);
      }
    },
    logout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      state.isAuthenticated = false;
    }
  },
})

export const { loadUser, login, logout } = AuthSlice.actions

export default AuthSlice.reducer