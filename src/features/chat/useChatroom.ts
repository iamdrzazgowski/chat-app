import { useMutation } from '@tanstack/react-query';
import { createOrGetChat } from '../../services/apiChatroom';
import { useNavigate } from 'react-router';

export function useChatroom() {
    const navigate = useNavigate();

    const { mutate: openChatroom, isPending: isLoading } = useMutation({
        mutationFn: (friendId: string) => createOrGetChat(friendId),
        onSuccess: (chatId) => {
            navigate(`/chat/${chatId}`);
        },
        onError: (err) => console.log(err.message),
    });

    return { openChatroom, isLoading };
}
