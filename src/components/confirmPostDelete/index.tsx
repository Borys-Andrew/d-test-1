'use client';

import { PATHS } from '@/constants/paths';
import { useAppDispatch } from '@/store';
import { deletePost } from '@/store/posts/postsApi';
import { Post } from '@/types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';

type ConfirmDeletModalTypes = {
  isOpen: boolean;
  post: Post;
  navigateTo?: string;
  onToggleModal: () => void;
};

export const ConfirmPostDelete = ({
  isOpen,
  post,
  navigateTo,
  onToggleModal,
}: ConfirmDeletModalTypes) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    onToggleModal();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onToggleModal}
      fullWidth
    >
      <DialogTitle>Do you want to delete the post?</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6">{post.title}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onToggleModal}>Cancel</Button>
        <Button
          onClick={() => {
            handleDelete();
            if (navigateTo) {
              router.push(PATHS.posts);
            }
          }}
          variant="contained"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
