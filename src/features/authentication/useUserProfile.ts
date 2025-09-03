import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export default function useUserProfile() {
    const { isLoading, data: user } = useQuery({
        queryKey: ['user'],
        queryFn: () => getCurrentUser(),
    });

    return { isLoading, user };
}
