import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { imageUploadAPI } from '../apis/imageUpload';

export const uploadImage = createAsyncThunk(
    'upload/file',
    async(file, { rejectWithValue }) => {
        try{
            const data = imageUploadAPI(file);
            return data;   
        }catch(err){
            return rejectWithValue(err.message || 'Image upload failed');
        }
    }
);

const initialState = {
    file: null,
    processing: false,
    uploadSuccess: false,
    uploadError: '',
    summaryText: '',
  };


export const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        resetUploadState: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
          .addCase(uploadImage.pending, (state) => {
            state.processing = true;
          })
          .addCase(uploadImage.fulfilled, (state, action) => {
            state.processing = false;
            state.uploadSuccess = true;
            state.uploadError = '';
            state.summaryText = action.payload.message;
          })
          .addCase(uploadImage.rejected, (state, action) => {
            state.processing = false;
            state.uploadError = action?.error?.message || 'Somthing went wrong!! Sorry';
          });
      }
});

export const { resetUploadState } = uploadSlice.actions;

export default uploadSlice.reducer;