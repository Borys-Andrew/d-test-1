'use client';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  Container,
  Link,
  Box,
  CircularProgress,
  Snackbar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { PATHS } from '@/constants/paths';
import { ConfirmPostDelete } from '@/components/confirmPostDelete';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { getPostById } from '@/store/posts/postsApi';

type PostDetailsPageProps = {
  id: string;
};

export const PostDetailsPage = ({ id }: PostDetailsPageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { selectedPost, loading, error } = useAppSelector(
    (state) => state.posts,
  );

  useEffect(() => {
    dispatch(getPostById(Number(id)));
  }, [dispatch, id]);

  const toggleModal = () => setIsOpen((prev) => !prev);

  // if (loading || !selectedPost) return <CircularProgress />;
  if (loading || !selectedPost)
    return (
      <Box
        sx={{
          minHeight: {
            xs: 'calc(100vh - 56px)',
            md: 'calc(100vh - 64px)',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        message={error}
      />
    );

  const userId = `User ${selectedPost?.userId}`;
  const avatarInitial = selectedPost?.title.charAt(0).toUpperCase();

  return (
    <Container sx={{ pt: 4 }}>
      <Card>
        <CardHeader
          avatar={<Avatar>{avatarInitial}</Avatar>}
          title={selectedPost?.title}
          subheader={userId}
        />
        <CardContent>
          <Typography variant="body1">{selectedPost?.body}</Typography>
        </CardContent>
        <CardActions sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', sm: 'fit-content' },
            }}
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={toggleModal}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              component={Link}
              href={PATHS.posts}
              startIcon={<ArrowBack />}
              title="To posts"
            >
              To posts
            </Button>
          </Box>
        </CardActions>
      </Card>

      {selectedPost && (
        <ConfirmPostDelete
          isOpen={isOpen}
          onToggleModal={toggleModal}
          post={selectedPost}
        />
      )}
    </Container>
  );
};
