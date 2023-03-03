import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SEC_KEY } from '../../Constants/Key';
import { Endpoints, EndpointRoutes } from '../../Constants/Endpoints';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

const url = Endpoints.SEC + SEC_KEY;

export const getData = createAsyncThunk(
  'data/getData',
  async (payload: any) => {
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
);
