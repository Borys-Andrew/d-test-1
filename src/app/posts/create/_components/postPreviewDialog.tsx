'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from '@mui/material';

type PostPreviewDialogProps = {
  title: string;
  body: string;
  isPreviewOpen: boolean;
  onTogglePreview: () => void;
  onHandleCreate: () => void;
  onHandleEdit: () => void;
};

export const PostPreviewDialog = ({
  title,
  body,
  isPreviewOpen,
  onTogglePreview,
  onHandleCreate,
  onHandleEdit,
}: PostPreviewDialogProps) => {
  return (
    <Dialog
      open={isPreviewOpen}
      onClose={onTogglePreview}
      fullWidth
    >
      <DialogTitle>Preview post</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: 'pre-wrap' }}
        >
          {body}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHandleEdit}>Edit</Button>
        <Button
          onClick={onHandleCreate}
          variant="contained"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
