// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = {
        ...payload,
      }
    },
    logout: (state) => {
      state.user = initialState
    },
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const { updateUser, logout } = authSlice.actions
export const getAccessToken = (state) => state.auth.user.accessToken
