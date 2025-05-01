'use client';

import { Post } from '@/types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

type PostDeleteDialogProps = {
  isOpen: boolean;
  post: Post;
  onToggleModal: () => void;
  onHandleDelete: () => void;
};

export const PostDeleteDialog = ({
  isOpen,
  post,
  onToggleModal,
  onHandleDelete,
}: PostDeleteDialogProps) => {
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
          onClick={onHandleDelete}
          variant="contained"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
