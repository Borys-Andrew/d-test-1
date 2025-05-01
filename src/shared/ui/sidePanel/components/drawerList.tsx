import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/shared/constants/navigationLinks';

type DrawerListProps = {
  width?: number;
  onToggleDrawer: () => void;
};

export const DrawerList = ({
  width = 250,
  onToggleDrawer,
}: DrawerListProps) => {
  return (
    <Box
      sx={{ width }}
      role="presentation"
      onClick={onToggleDrawer}
    >
      <List>
        {NAVIGATION_LINKS.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
          >
            <Link
              href={item.path}
              passHref
              legacyBehavior
            >
              <ListItemButton component="a">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
