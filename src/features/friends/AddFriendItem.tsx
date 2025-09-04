export default function AddFriendItem({ friend }) {
    return (
        <div
            key={friend.id}
            className='flex items-center justify-between p-2 rounded-lg  hover:bg-gray-50 transition mt-6 w-[300px]'>
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

            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition cursor-pointer'>
                Add
            </button>
        </div>
    );
}
