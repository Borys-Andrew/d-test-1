import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const getPostById = createAsyncThunk(
  'posts/getPostById',
  async (id: number) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  },
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost: { title: string; body: string; userId: number }) => {
    const response = await axios.post(BASE_URL, newPost);
    return response.data;
  },
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({
    id,
    updatedPost,
  }: {
    id: number;
    updatedPost: { title: string; body: string };
  }) => {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedPost);
    return response.data;
  },
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: number) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  },
);

export const getPostComments = createAsyncThunk(
  'posts/getPostComments',
  async (id: number) => {
    const response = await axios.get(`${BASE_URL}/${id}/comments`);
    return response.data;
  },
);
