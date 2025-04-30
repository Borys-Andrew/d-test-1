'use client';

import { Container, Snackbar } from '@mui/material';
import { PATHS } from '@/constants/paths';
import { Loader, ConfirmPostDelete } from '@/components';
import { PostCard } from './components';
import { usePostDetails } from './hooks';

type PostDetailsPageProps = {
  id: string;
};

export const PostDetailsPage = ({ id }: PostDetailsPageProps) => {
  const { isOpen, selectedPost, loading, error, toggleModal, handleDelete } =
    usePostDetails({ id });

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
      <PostCard
        selectedPost={selectedPost}
        postsLink={PATHS.posts}
        toggleModal={toggleModal}
      />
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
