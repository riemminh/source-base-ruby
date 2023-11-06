import { redirect } from 'next/navigation';

import { PATH_PAGE } from '@/routes/paths';

export default function ProfilePage() {
  redirect(PATH_PAGE.profile);
}
