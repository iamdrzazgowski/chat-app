import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage as sendMessageApi } from '../../services/apiChatroom';
import { useParams } from 'react-router';
import useUserProfile from '../authentication/useUserProfile';
import toast from 'react-hot-toast';

export default function useSendMessage() {
    const queryClient = useQueryClient();
    const { chatId } = useParams();
    const { user } = useUserProfile();

    const { mutate: sendMessage, isPending: isLoading } = useMutation({
        mutationFn: (content: string) => {
            if (!chatId) throw new Error('chatId is required');
            if (!user?.id) throw new Error('user.id is required');
            return sendMessageApi(String(user.id), String(chatId), content);
        },
        onMutate: async (content: string) => {
            // Optimistic update: dodaj wiadomość do cache od razu
            queryClient.setQueryData(
                ['messages', chatId],
                (old: any[] = []) => [
                    ...old,
                    {
                        id: `temp-${Date.now()}`, // tymczasowe ID
                        chat_id: chatId,
                        user_id: user?.id,
                        content,
                        created_at: new Date().toISOString(),
                    },
                ]
            );
        },
        onError: (err) => toast.error(err.message),
    });

    return { sendMessage, isLoading };
}
