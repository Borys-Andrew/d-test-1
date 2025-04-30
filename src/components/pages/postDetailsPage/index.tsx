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
  Snackbar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { PATHS } from '@/constants/paths';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  deletePost,
  getPostById,
  getPostComments,
} from '@/store/posts/postsApi';
import { useRouter } from 'next/navigation';
import { Loader, ConfirmPostDelete } from '@/components';

type PostDetailsPageProps = {
  id: string;
};

export const PostDetailsPage = ({ id }: PostDetailsPageProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedPost, loading, error } = useAppSelector(
    (state) => state.posts,
  );
  const userId = `User ${selectedPost?.userId}`;
  const avatarInitial = selectedPost?.title.charAt(0).toUpperCase();

  useEffect(() => {
    dispatch(getPostById(Number(id)));
    dispatch(getPostComments(Number(id)));
  }, [dispatch, id]);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const handleDelete = () => {
    dispatch(deletePost(+id));
    toggleModal();
    router.push(PATHS.posts);
  };

  if (loading || !selectedPost) return <Loader />;

  if (error)
    return (
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        message={error}
      />
    );

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
          post={selectedPost}
          onToggleModal={toggleModal}
          onHandleDelete={handleDelete}
        />
      )}
    </Container>
  );
};
