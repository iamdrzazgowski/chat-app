import { useQuery } from '@tanstack/react-query';
import { fetchMessages } from '../../services/apiChatroom';

export default function useMessages(chatId: string) {
    const { data: messages, isLoading } = useQuery({
        queryKey: ['messages', chatId],
        queryFn: () => fetchMessages(chatId),
    });

    return { messages, isLoading };
}
