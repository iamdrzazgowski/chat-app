import { useMutation } from '@tanstack/react-query';
import { sendMessage as sendMessageApi } from '../../services/apiChatroom';
import { useParams } from 'react-router';
import useUserProfile from '../authentication/useUserProfile';
import toast from 'react-hot-toast';

export default function useSendMessage() {
    const { chatId } = useParams();
    const { user } = useUserProfile();

    const { mutate: sendMessage, isPending: isLoading } = useMutation({
        mutationFn: (content: string) => {
            if (!chatId) throw new Error('chatId is required');
            if (!user?.id) throw new Error('user.id is required');
            return sendMessageApi(String(user.id), String(chatId), content);
        },
        onError: (err) => toast.error(err.message),
    });

    return { sendMessage, isLoading };
}
