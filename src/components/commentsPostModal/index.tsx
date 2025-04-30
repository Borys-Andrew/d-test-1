'use client';

import { Comment } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { CommentItem } from './components';

type CommentsPostModalTypes = {
  isOpen: boolean;
  comments: Comment[];
  onToggleModal: () => void;
};

export const CommentsPostModal = ({
  isOpen,
  comments,
  onToggleModal,
}: CommentsPostModalTypes) => {
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setScroll('paper');

    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={onToggleModal}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
            />
          ))}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
