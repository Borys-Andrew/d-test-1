'use client';

import { Box, TextField, Grid, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PostsSkeletonGrid } from './postsSkeletonGrid';
import { usePosts } from '../_hooks/usePosts';
import { PostCard } from './postCard';
import { PostSpeedDial } from './postSpeedDial';

export const PostsPage = () => {
  const { search, loading, filteredPosts, setSearch } = usePosts();

  return (
    <Box>
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
          <PostsSkeletonGrid listItems={12} />
        ) : (
          filteredPosts.map((post) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={post.id}
            >
              <PostCard post={post} />
            </Grid>
          ))
        )}
      </Grid>
      <PostSpeedDial />
    </Box>
  );
};
