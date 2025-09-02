import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import type { LoginArgs } from '../../types/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export default function useLogin() {
    const navigate = useNavigate();

    const { mutate: login, isPending: isLoading } = useMutation({
        mutationFn: ({ email, password }: LoginArgs) =>
            loginApi({ email, password }),
        onSuccess: () => {
            toast.success('Successfuly log in');
            navigate('/chat', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err.message);
            toast.error('Provided email or password are incorrect');
        },
    });

    return { login, isLoading };
}
