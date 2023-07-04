// ** Redux Imports
import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

interface InitialStateProps {
  user: {
    logined: boolean
  }
}

const initialState: InitialStateProps = {
  user: {
    logined: false,
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
      state.user = initialState.user
    },
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const { updateUser, logout } = authSlice.actions
export const getLogined = (state: RootState) => state.auth.user.logined
