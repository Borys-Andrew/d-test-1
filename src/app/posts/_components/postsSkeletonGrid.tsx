'use client';

import { Grid } from '@mui/material';
import { PostCardSkeleton } from './postCardSkeleton';

type PostsSkeletonGridProps = {
  listItems?: number;
};

export const PostsSkeletonGrid = ({
  listItems = 6,
}: PostsSkeletonGridProps) => {
  return [...Array(listItems)].map((_, i) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={i}
    >
      {' '}
      <PostCardSkeleton />
    </Grid>
  ));
};
