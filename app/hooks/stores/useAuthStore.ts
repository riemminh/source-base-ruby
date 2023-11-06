import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { SignInSuccessResponse } from '@/models/auth';

export enum AuthKey {
  UserKey = 'user_store_key',
}

type UserType = SignInSuccessResponse | null;
export interface AuthState {
  user: UserType;
  setStoreUser: (user: UserType) => void;
}

const mockDataUser = {
  access_expires: 'number',
  access_token: 'access_token',
  profile: {
    username: 'user1',
    user_types: ['123'],
    email: 'email@email.com',
    first_name: 'this is first name',
    last_name: 'this is last name',
    birthday: 'string',
    id: 111,
    is_tutorial_completed: false,
  },
  refresh_expires: 3600,
  refresh_token: 'refresh_token',
} as any;

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: mockDataUser,
        setStoreUser: (user) => set({ user }),
      }),
      { name: AuthKey.UserKey },
    ),
  ),
);

export default useAuthStore;
