import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useSearchFriends } from './useSearchFriends';
import AddFriendItem from './AddFriendItem';

export default function AddFriend() {
    const [search, setSearch] = useState('');
    const { data } = useSearchFriends(search);

    return (
        <div className='w-full max-w-sm mx-auto px-4 flex flex-col'>
            <div className='relative w-[300px]'>
                <span className='absolute inset-y-0 left-3 flex items-center text-gray-400'>
                    <HiMagnifyingGlass className='w-5 h-5' />
                </span>
                <input
                    type='text'
                    placeholder='Find a friend...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-700 placeholder-gray-400 text-sm'
                />
            </div>
            <div className='flex flex-col gap-2'>
                {(data?.length ?? 0) > 0 &&
                    data?.map((friend) => <AddFriendItem friend={friend} />)}
            </div>
        </div>
    );
}
