'use client';

import { Comment } from '@/types';
import { Typography } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';

type PostCommentProps = {
  comment: Comment;
};

export const PostComment = ({ comment }: PostCommentProps) => {
  return (
    <DialogContentText sx={{ p: 2 }}>
      <Typography variant="h6">{comment.name}</Typography>
      <Typography
        variant="body2"
        sx={{
          color: (theme) => theme.palette.text.primary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '4',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {comment.body}
      </Typography>
    </DialogContentText>
  );
};
