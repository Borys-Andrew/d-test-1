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

type ConfirmDeletModalTypes = {
  isOpen: boolean;
  post: Post;
  onToggleModal: () => void;
  onHandleDelete: () => void;
};

export const ConfirmPostDelete = ({
  isOpen,
  post,
  onToggleModal,
  onHandleDelete,
}: ConfirmDeletModalTypes) => {
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
