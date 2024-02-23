import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginApi } from '../apis/auth';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginApi(email, password);
      // Save token to local storage or handle it however you prefer
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    email: null
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
      state.email = null;
    },
    clearAuthError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.username;
        state.token = action.payload.token;
        state.email = action.payload.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.user = null;
        state.token = null;
        state.email = null;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;

export default authSlice.reducer;
