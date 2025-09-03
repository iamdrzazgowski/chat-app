export default function FriendItem({ friend }) {
    return (
        <div
            key={friend.id}
            className='flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition'>
            <img
                src={friend.avatar}
                alt={friend.name}
                className='w-10 h-10 rounded-full object-cover ring-1 ring-white shadow-sm'
            />
            <div className='flex-1 min-w-0'>
                <h3 className='text-sm font-medium text-gray-900 truncate'>
                    {friend.name}
                </h3>
                <p className='text-xs text-gray-600 truncate'>
                    {friend.lastMessage}
                </p>
            </div>
        </div>
    );
}
