import { useQuery } from '@tanstack/react-query';
import { searchFriends } from '../../services/apiFriend';

export function useSearchFriends(query: string) {
    const { isLoading, data } = useQuery({
        queryKey: ['searchFriends', query],
        queryFn: () => searchFriends(query),
        enabled: !!query,
    });

    return { isLoading, data: query ? data : null };
}
