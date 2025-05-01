import { PATHS } from '@/shared/constants/paths';
import { Add, Home } from '@mui/icons-material';

export const POST_QUICK_ACTIONS = [
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
