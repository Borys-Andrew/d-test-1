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
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { SPEED_ACTIONS } from './constants';
import { useRouter } from 'next/navigation';

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];

export const PostsPage = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const loading = false;

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
          <PostsSkeleton />
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
