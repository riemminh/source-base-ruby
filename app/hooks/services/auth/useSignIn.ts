import { UseMutationOptions, useMutation } from 'react-query';

import { AuthSignIn, SignInErrResponse, SignInSuccessResponse } from '@/models/auth';
import { requestSerialize } from '@/utils/axios';

const signIn = async (params: AuthSignIn): Promise<SignInSuccessResponse> => {
  return requestSerialize('/auth/signin', {
    method: 'POST',
    data: params,
  });
};

export function useSignIn(options?: UseMutationOptions<SignInSuccessResponse, SignInErrResponse, AuthSignIn>) {
  const chunks = useMutation({
    mutationKey: 'SignIn_Mutation',
    mutationFn: signIn,
    ...options,
  });
  return chunks;
}
