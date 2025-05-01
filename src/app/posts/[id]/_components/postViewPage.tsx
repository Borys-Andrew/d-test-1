'use client';

import { Container, Snackbar } from '@mui/material';
import { PATHS } from '@/shared/constants/paths';
import { usePostView } from '../_hooks/usePostView';
import { Loader } from '@/shared/ui/loader';
import { PostCard } from './postCard';
import { PostDeleteDialog } from '@/shared/ui/postDeleteDialog';

type PostViewPageProps = {
  id: string;
};

export const PostViewPage = ({ id }: PostViewPageProps) => {
  const { isOpen, selectedPost, loading, error, toggleModal, handleDelete } =
    usePostView({ id });

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
    <Container
      maxWidth="lg"
      sx={{ pt: 4 }}
    >
      <PostCard
        selectedPost={selectedPost}
        postsLink={PATHS.posts}
        toggleModal={toggleModal}
      />
      {selectedPost && (
        <PostDeleteDialog
          isOpen={isOpen}
          post={selectedPost}
          onToggleModal={toggleModal}
          onHandleDelete={handleDelete}
        />
      )}
    </Container>
  );
};
