import { LoginUserRequest, api } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

export const useAuthenticate = () => {
  return useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: LoginUserRequest) => api.auth.loginUser(data, true),
  });
};
