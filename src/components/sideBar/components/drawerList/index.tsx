import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants/navLinks';

type DrawerListTypes = {
  width?: number;
  onToggleDrawer: () => void;
};

export const DrawerList = ({
  width = 250,
  onToggleDrawer,
}: DrawerListTypes) => {
  return (
    <Box
      sx={{ width }}
      role="presentation"
      onClick={onToggleDrawer}
    >
      <List>
        {NAV_LINKS.map((item) => (
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
      <Divider />
    </Box>
  );
};
