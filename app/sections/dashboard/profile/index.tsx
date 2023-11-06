'use client';

import useAuthStore from '@/hooks/stores/useAuthStore';

export default function Profile() {
  const { user } = useAuthStore();
  return <div>Store data: {user?.profile?.first_name}</div>;
}
