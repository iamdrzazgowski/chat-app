interface Friend {
    avatar?: string;
    fullName: string;
    // add other friend properties if needed
}

interface FriendItemProps {
    friend: Friend;
    onClick: React.MouseEventHandler<HTMLLIElement>;
}

export default function FriendItem({ friend, onClick }: FriendItemProps) {
    return (
        <li
            className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition `}
            onClick={onClick}>
            <img
                src={friend?.avatar || '/default-user.jpg'}
                alt={friend?.fullName}
                className='w-10 h-10 rounded-full object-cover ring-1 ring-white shadow-sm'
            />
            <div className='flex-1 min-w-0'>
                <h3 className='text-sm font-medium text-gray-900 truncate'>
                    {friend?.fullName}
                </h3>
            </div>
        </li>
    );
}
