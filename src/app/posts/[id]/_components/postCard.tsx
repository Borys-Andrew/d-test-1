'use client';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  Link,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Post } from '@/types';

type PostCardProps = {
  selectedPost: Post;
  postsLink: string;
  toggleModal: () => void;
};

export const PostCard = ({
  selectedPost,
  postsLink,
  toggleModal,
}: PostCardProps) => {
  const userId = `User ${selectedPost?.userId}`;
  const avatarInitial = selectedPost?.title?.charAt(0).toUpperCase() || 'U';

  return (
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
            href={postsLink}
            startIcon={<ArrowBack />}
            title="To posts"
          >
            To posts
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
