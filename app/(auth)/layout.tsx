'use client';

import { Box } from '@mui/material';

export default function LayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        py: 3,
        textAlign: 'center',
      }}
    >
      {children}
    </Box>
  );
}
