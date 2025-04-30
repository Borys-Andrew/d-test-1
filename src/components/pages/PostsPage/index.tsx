'use client';

import {
  Box,
  TextField,
  Grid,
  InputAdornment,
  SpeedDialAction,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PostItem, PostsSkeleton } from './components';
import { usePosts } from './hooks';

export const PostsPage = () => {
  const { search, loading, filteredPosts, setSearch } = usePosts();

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        type="search"
        placeholder="Пошук за заголовком..."
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{ color: (theme) => theme.palette.text.secondary }}
              />
            </InputAdornment>
          ),
        }}
      />

      <Grid
        container
        spacing={2}
      >
        {loading ? (
          <PostsSkeleton totalItems={9} />
        ) : (
          filteredPosts.map((post) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={post.id}
            >
              <PostItem post={post} />
            </Grid>
          ))
        )}
      </Grid>
      <SpeedDialAction />
    </Box>
  );
};
