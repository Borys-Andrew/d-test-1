'use client';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  Container,
  Link,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { PATHS } from '@/constants/paths';

type PostDetailsPageProps = {
  id: string;
};

const post = {
  userId: 1,
  id: 3,
  title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
};

export const PostDetailsPage = ({ id }: PostDetailsPageProps) => {
  console.log('🚀 ~ PostDetailsPage ~ id:', id);

  const userId = `User ${post.userId}`;
  const avatarInitial = post.title.charAt(0).toUpperCase();

  return (
    <Container sx={{ pt: 4 }}>
      <Card>
        <CardHeader
          avatar={<Avatar>{avatarInitial}</Avatar>}
          title={post.title}
          subheader={userId}
        />
        <CardContent>
          <Typography variant="body1">{post.body}</Typography>
        </CardContent>
        <CardActions
          sx={{
            p: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              width: {
                xs: '100%',
                sm: 'fit-content',
              },
            }}
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              component={Link}
              href={PATHS.posts}
              startIcon={<ArrowBack />}
              title="To posts"
            >
              To posts
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
};
