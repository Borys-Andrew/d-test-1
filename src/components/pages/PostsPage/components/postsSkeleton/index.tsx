'use client';

import { Card, CardHeader, CardContent, Skeleton, Grid } from '@mui/material';

type PostsSkeletonTypes = {
  totalItems?: number;
};

export const PostsSkeleton = ({ totalItems = 6 }: PostsSkeletonTypes) => {
  return [...Array(totalItems)].map((_, i) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={i}
    >
      <Card>
        <CardHeader
          avatar={
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ bgcolor: (theme) => theme.palette.grey[300] }} // Light gray for skeleton
            />
          }
          title={
            <Skeleton
              variant="text"
              height={20}
              width="80%"
              sx={{ bgcolor: (theme) => theme.palette.grey[300] }}
            />
          }
          subheader={
            <Skeleton
              variant="text"
              height={16}
              width="40%"
              sx={{ bgcolor: (theme) => theme.palette.grey[300] }}
            />
          }
        />
        <CardContent>
          <Skeleton
            variant="text"
            height={16}
            width="100%"
            sx={{ bgcolor: (theme) => theme.palette.grey[300], mb: 1 }}
          />
          <Skeleton
            variant="text"
            height={16}
            width="60%"
            sx={{ bgcolor: (theme) => theme.palette.grey[300] }}
          />
        </CardContent>
      </Card>
    </Grid>
  ));
};
