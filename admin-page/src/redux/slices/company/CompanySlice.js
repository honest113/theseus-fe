import { createSlice } from '@reduxjs/toolkit'

export const CompanySlice = createSlice({
  name: 'company',
  initialState: {
    listCompany: []
  },
  reducers: {
    loadListCompany: (state, action) => {
      state.listCompany = action.payload;
    },
  },
})

export const { loadListCompany } = CompanySlice.actions

export default CompanySlice.reducer