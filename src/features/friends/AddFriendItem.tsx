import useAddFriend from './useAddFriend';

type Friend = {
    id: string;
    avatar_url?: string;
    fullName: string;
};

interface AddFriendItemProps {
    friend: Friend;
    onCloseModal: () => void;
}

export default function AddFriendItem({
    friend,
    onCloseModal,
}: AddFriendItemProps) {
    const { addFriend, isLoading } = useAddFriend();

    const handleClick = () => {
        addFriend(friend.id);
        onCloseModal();
    };

    return (
        <div className='flex items-center justify-between p-2 rounded-lg  hover:bg-gray-50 transition mt-6 w-[300px]'>
            <div className='flex items-center space-x-2'>
                <img
                    src={friend.avatar_url || '/default-user.jpg'}
                    alt={friend.fullName}
                    className='w-10 h-10 rounded-full object-cover ring-1 ring-white shadow-sm'
                />
                <h3 className='text-sm font-medium text-gray-900 truncate'>
                    {friend.fullName}
                </h3>
            </div>

            <button
                className='bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition cursor-pointer'
                onClick={handleClick}
                disabled={isLoading}>
                Add
            </button>
        </div>
    );
}
