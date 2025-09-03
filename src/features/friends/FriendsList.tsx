import { FiUserPlus } from 'react-icons/fi';
import { LuUsers } from 'react-icons/lu';
import FriendItem from './FriendItem';

const tempFriends = [
    {
        id: 1,
        name: 'Marcin Nowak',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Cześć! Jak leci?',
        time: '14:30',
        online: true,
        unread: 2,
    },
    {
        id: 2,
        name: 'Kasia Wiśniewska',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Dzięki za pomoc wczoraj!',
        time: '13:45',
        online: false,
        unread: 0,
    },
    {
        id: 3,
        name: 'Tomek Zieliński',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Spotkanie o 15:00?',
        time: '12:20',
        online: true,
        unread: 1,
    },
    {
        id: 4,
        name: 'Ola Kamińska',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Super zdjęcia z wakacji!',
        time: '11:15',
        online: false,
        unread: 0,
    },
    {
        id: 1,
        name: 'Marcin Nowak',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Cześć! Jak leci?',
        time: '14:30',
        online: true,
        unread: 2,
    },
    {
        id: 2,
        name: 'Kasia Wiśniewska',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Dzięki za pomoc wczoraj!',
        time: '13:45',
        online: false,
        unread: 0,
    },
    {
        id: 3,
        name: 'Tomek Zieliński',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Spotkanie o 15:00?',
        time: '12:20',
        online: true,
        unread: 1,
    },
    {
        id: 4,
        name: 'Ola Kamińska',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Super zdjęcia z wakacji!',
        time: '11:15',
        online: false,
        unread: 0,
    },
    {
        id: 1,
        name: 'Marcin Nowak',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Cześć! Jak leci?',
        time: '14:30',
        online: true,
        unread: 2,
    },
    {
        id: 2,
        name: 'Kasia Wiśniewska',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Dzięki za pomoc wczoraj!',
        time: '13:45',
        online: false,
        unread: 0,
    },
    {
        id: 3,
        name: 'Tomek Zieliński',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Spotkanie o 15:00?',
        time: '12:20',
        online: true,
        unread: 1,
    },
    {
        id: 4,
        name: 'Ola Kamińska',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Super zdjęcia z wakacji!',
        time: '11:15',
        online: false,
        unread: 0,
    },
    {
        id: 1,
        name: 'Marcin Nowak',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Cześć! Jak leci?',
        time: '14:30',
        online: true,
        unread: 2,
    },
    {
        id: 2,
        name: 'Kasia Wiśniewska',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Dzięki za pomoc wczoraj!',
        time: '13:45',
        online: false,
        unread: 0,
    },
    {
        id: 3,
        name: 'Tomek Zieliński',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Spotkanie o 15:00?',
        time: '12:20',
        online: true,
        unread: 1,
    },
    {
        id: 4,
        name: 'Ola Kamińska',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        lastMessage: 'Super zdjęcia z wakacji!',
        time: '11:15',
        online: false,
        unread: 0,
    },
];

export default function FriendsList() {
    return (
        <div className='flex flex-col h-full'>
            <div className='sticky top-0 bg-gray-50 px-4 py-1 z-10 flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-sm text-gray-600'>
                    <LuUsers className='w-5 h-5' />
                    <span>Friends ({tempFriends.length})</span>
                </div>
                <button className='p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 cursor-pointer rounded-lg transition-colors'>
                    <FiUserPlus className='w-5 h-5' />
                </button>
            </div>

            <div className='flex-1 overflow-y-auto scrollbar-minimal space-y-1 p-2'>
                {tempFriends.map((friend) => (
                    <FriendItem key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
}
