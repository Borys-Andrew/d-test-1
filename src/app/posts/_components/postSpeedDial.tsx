'use client';

import { SpeedDial, SpeedDialAction } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { POST_QUICK_ACTIONS } from '../_constants/postQuickActions';

export const PostSpeedDial = () => {
  const router = useRouter();

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{ position: 'fixed', bottom: 24, right: 24 }}
      icon={<AddIcon />}
    >
      {POST_QUICK_ACTIONS.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => router.push(action.link)}
        />
      ))}
    </SpeedDial>
  );
};
