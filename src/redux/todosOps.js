//https://67b37562392f4aa94fa74786.mockapi.io/tasks

import axios from 'axios';
// import { fetchDataSuccess, setIsError, setIsLoading } from './todoSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// //=========варіант складніший по старому, до toolkit

// export const fetchData = () => async dispatch => {
//   //створили ф-цію fetchData, яка буде повертати асинхр.ф-цію (робити запит на сервер)(вона називається санка - thunk), що приймає dispatch
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await axios.get(
//       'https://67b37562392f4aa94fa74786.mockapi.io/tasks'
//     );
//     dispatch(fetchDataSuccess(response.data));
//   } catch (error) {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };

//=========варіант простіший з toolkit

axios.defaults.baseURL = 'https://67b37562392f4aa94fa74786.mockapi.io';

export const fetchData = createAsyncThunk(
  'todos/tetchData',
  async ({ signal }, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks', { signal });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/tasks/${id}`);
      return data.id; //номер id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.put(`/tasks/${body.id}`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
