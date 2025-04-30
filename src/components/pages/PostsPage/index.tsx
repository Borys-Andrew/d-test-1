'use client';

import {
  Box,
  TextField,
  Grid,
  InputAdornment,
  SpeedDial,
  SpeedDialAction,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PostItem, PostsSkeleton } from './components';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { SPEED_ACTIONS } from './constants';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { getPosts } from '@/store/posts';

export const PostsPage = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { posts, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

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

      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        icon={<AddIcon />}
      >
        {SPEED_ACTIONS.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => router.push(action.link)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
