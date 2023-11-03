import { Box } from '@mui/material';

import NavDashboard from './nav-dashboard';

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <NavDashboard />
      <Box
        sx={{
          p: 2,
          flex: 1,
        }}
        component="main"
      >
        {children}
      </Box>
    </Box>
  );
}
