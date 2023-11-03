'use client';

import { Box, Stack, Drawer } from '@mui/material';

import { NavSectionVertical } from '@/components/nav';
import { RScrollbar } from '@/components/scrollbar';

import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function NavVertical() {
  const renderContent = (
    <RScrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      ></Stack>

      <NavSectionVertical data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </RScrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: 280 },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            zIndex: 0,
            width: 280,
            bgcolor: 'transparent',
            borderRightStyle: 'dashed',
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
