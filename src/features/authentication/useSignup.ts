import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import type { SignupArgs } from '../../types/api';
import toast from 'react-hot-toast';

export function useSignup() {
    const { mutate: signup, isPending: isLoading } = useMutation({
        mutationFn: ({ email, password, fullName }: SignupArgs) =>
            signupApi({ email, password, fullName }),
        onSuccess: () => {
            toast.success(
                'Account successfully created! Please verify the new account from the users email address '
            );
        },
        onError: (err) => toast.error(err.message),
    });

    return { signup, isLoading };
}
