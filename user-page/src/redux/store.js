import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/auth/AuthSlice'

export default configureStore({
  reducer: {
    auth: AuthSlice,
  },
})