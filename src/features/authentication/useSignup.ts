import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import type { SignupArgs } from '../../types/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function useSignup() {
    const navigate = useNavigate();
    const { mutate: signup, isPending: isLoading } = useMutation({
        mutationFn: ({ email, password, fullName }: SignupArgs) =>
            signupApi({ email, password, fullName }),
        onSuccess: () => {
            toast.success(
                'Account successfully created! Please verify the new account from the users email address '
            );
            navigate('/login');
        },
        onError: (err) => toast.error(err.message),
    });

    return { signup, isLoading };
}
