import { PATHS } from '@/constants/paths';
import { Add, Home } from '@mui/icons-material';

export const SPEED_ACTIONS = [
  {
    name: 'Create post',
    icon: <Add />,
    link: PATHS.createPost,
  },
  {
    name: 'Home page',
    icon: <Home />,
    link: PATHS.home,
  },
];
