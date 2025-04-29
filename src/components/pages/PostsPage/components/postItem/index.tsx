'use client';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
} from '@mui/material';
import { Delete, ArrowForward } from '@mui/icons-material';
import Link from 'next/link';
import { Post } from '@/types';
import { PATHS } from '@/constants/paths';
import { useState } from 'react';
import { ConfirmPostDelete } from '@/components/confirmPostDelete';

type PostItemTypes = {
  post: Post;
};

export const PostItem = ({ post }: PostItemTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const userId = `User ${post.userId}`;
  const avatarInitial = post.title.charAt(0).toUpperCase();

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDelete = () => {
    toggleModal();
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: (theme) => theme.palette.custom.avatar,
                color: (theme) => theme.palette.common.white,
              }}
            >
              {avatarInitial}
            </Avatar>
          }
          title={
            <Typography
              variant="subtitle2"
              sx={{
                color: (theme) => theme.palette.text.primary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {post.title}
            </Typography>
          }
          subheader={userId}
          action={
            <IconButton onClick={handleDelete}>
              <Delete sx={{ color: (theme) => theme.palette.error.main }} />
            </IconButton>
          }
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.text.primary,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            component={Link}
            href={`${PATHS.posts}/${post.id}`}
            sx={{ color: (theme) => theme.palette.secondary.main }}
          >
            <ArrowForward />
          </IconButton>
        </CardActions>
      </Card>
      <ConfirmPostDelete
        isOpen={isOpen}
        onToggleModal={toggleModal}
        post={post}
      />
    </>
  );
};
