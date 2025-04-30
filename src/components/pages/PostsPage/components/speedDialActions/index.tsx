'use client';

import { SpeedDial, SpeedDialAction } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SPEED_ACTIONS } from '../../constants';
import { useRouter } from 'next/navigation';

export const SpeedDialActions = () => {
  const router = useRouter();

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{ position: 'fixed', bottom: 24, right: 24 }}
      icon={<AddIcon />}
    >
      {SPEED_ACTIONS.map((action) => (
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
