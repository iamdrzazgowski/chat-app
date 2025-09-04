import { useMutation } from '@tanstack/react-query';
import { addFriend as addFriendApi } from '../../services/apiFriend';
import toast from 'react-hot-toast';

export default function useAddFriend() {
    const { mutate: addFriend, isPending: isLoading } = useMutation({
        mutationFn: (friendId: string) => addFriendApi(friendId),
        onSuccess: () => {
            toast.success('Successfully added new friend');
        },
        onError: (err) => toast.error(err.message),
    });

    return { addFriend, isLoading };
}
