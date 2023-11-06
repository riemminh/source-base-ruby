import { Box } from '@mui/material';
import { redirect } from 'next/navigation';

import useAuthStore from '@/hooks/stores/useAuthStore';
import { PATH_PAGE } from '@/routes/paths';

import NavDashboard from './nav-dashboard';

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  const isAuth = useAuthStore.getState()?.user;

  if (!isAuth) {
    redirect(PATH_PAGE.login);
  }

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
