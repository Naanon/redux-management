import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { api } from '../services/api'

export interface UserState {
  data: [] | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: "An unexpected error occurred"
}

export const getUsers = createAsyncThunk("user", async () => {
  return (
    api.get("/users").then(response => response.data)
  )
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.data = action.payload
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
        state.data = []
      })
  }
})

// Action creators are generated for each case reducer function

export default userSlice.reducer