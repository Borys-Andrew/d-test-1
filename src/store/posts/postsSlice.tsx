import { Comment, Post } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getPostComments,
} from './postsApi';

type PoInitialStateProps = {
  posts: Post[];
  selectedPost: Post | null;
  postComments: Comment[];
  loading: boolean;
  error: string | null;
};

const initialState: PoInitialStateProps = {
  posts: [],
  selectedPost: null,
  postComments: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // POSTS
      // === Get all ===
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching posts';
      })

      // === Get by ID ===
      .addCase(getPostById.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.loading = false;
      })
      .addCase(getPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch post';
      })

      // === Create ===
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
        state.loading = false;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error creating post';
      })

      // === Udate ===
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id,
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error updating post';
      })

      // === Delete ===
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.loading = false;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error deleting post';
      })

      // POST COMMENTS
      // === Get all ===
      .addCase(getPostComments.fulfilled, (state, action) => {
        state.postComments = action.payload;
        state.loading = false;
      })
      .addCase(getPostComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch comments';
      });
  },
});

export default postsSlice.reducer;
