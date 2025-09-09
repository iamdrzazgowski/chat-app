import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import type { LoginArgs } from '../../types/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export default function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: login, isPending: isLoading } = useMutation({
        mutationFn: ({ email, password }: LoginArgs) =>
            loginApi({ email, password }),
        onSuccess: async () => {
            toast.success('Successfuly log in');
            await queryClient.invalidateQueries({ queryKey: ['user'] });
            navigate('/', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err.message);
            toast.error('Provided email or password are incorrect');
        },
    });

    return { login, isLoading };
}
