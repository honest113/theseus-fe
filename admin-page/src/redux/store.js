import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/auth/AuthSlice'
import CompanySlice from './slices/company/CompanySlice'

export default configureStore({
  reducer: {
    auth: AuthSlice,
    company: CompanySlice,
  },
})