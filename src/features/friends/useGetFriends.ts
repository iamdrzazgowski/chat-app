import { useQuery } from '@tanstack/react-query';
import { getFriends } from '../../services/apiFriend';

export function useGetFriends() {
    const { data: friends, isLoading } = useQuery({
        queryKey: ['friends'],
        queryFn: getFriends,
    });

    return { friends, isLoading };
}
