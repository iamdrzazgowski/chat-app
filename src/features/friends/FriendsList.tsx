import { FiUserPlus } from 'react-icons/fi';
import { LuUsers } from 'react-icons/lu';
import FriendItem from './FriendItem';
import Modal from '../../components/Modal';
import AddFriend from './AddFriend';
import { useGetFriends } from './useGetFriends';
import { useChatroom } from '../chat/useChatroom';

export default function FriendsList() {
    const { isLoading, friends } = useGetFriends();
    const { openChatroom } = useChatroom();

    if (isLoading) return <p>Loading...</p>;

    const handleClick = (friendId: string) => {
        openChatroom(friendId);
    };

    return (
        <Modal>
            <div className='flex flex-col h-full'>
                <div className='sticky top-0  px-4 py-1 z-10 flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-sm text-gray-600'>
                        <LuUsers className='w-5 h-5' />
                        <span>Friends ({friends?.length})</span>
                    </div>
                    <Modal.Open>
                        <button className='p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 cursor-pointer rounded-lg transition-colors'>
                            <FiUserPlus className='w-5 h-5' />
                        </button>
                    </Modal.Open>
                </div>

                <ul className='flex-1 overflow-y-auto scrollbar-minimal space-y-1 p-2'>
                    {friends?.map((friend) => (
                        <FriendItem
                            friend={friend}
                            onClick={() => handleClick(friend.id)}
                            key={friend.id}
                        />
                    ))}
                </ul>
                <Modal.Window>
                    <AddFriend
                        onCloseModal={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                </Modal.Window>
            </div>
        </Modal>
    );
}
