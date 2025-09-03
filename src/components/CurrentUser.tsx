import useUserProfile from '../features/authentication/useUserProfile';

export default function CurrentUser() {
    const { user } = useUserProfile();

    return (
        <div className='p-4 border-t border-gray-100 bg-gray-50'>
            <div className='flex items-center space-x-3'>
                <img
                    src={user.avatar ? user.avatar : '/default-user.jpg'}
                    alt={user.fullName}
                    className='w-12 h-12 rounded-full object-cover ring-2 ring-blue-200 shadow-sm'
                />
                <div className='flex-1 min-w-0'>
                    <h3 className='text-sm font-semibold text-gray-900 truncate'>
                        {user.fullName}
                    </h3>
                    <div className='text-xs text-green-600 flex items-center'>
                        <p className='w-2 h-2 bg-green-500 rounded-full mr-1'></p>
                        Online
                    </div>
                </div>
            </div>
        </div>
    );
}
