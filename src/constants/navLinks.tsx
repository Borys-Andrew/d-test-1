import { Home, Add, List } from '@mui/icons-material';
import { PATHS } from './paths';

export const NAV_LINKS = [
  { text: 'Home', path: PATHS.home, icon: <Home /> },
  { text: 'Posts', path: PATHS.posts, icon: <List /> },
  { text: 'Create Post', path: PATHS.createPost, icon: <Add /> },
];
