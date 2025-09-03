import Logout from '../features/authentication/Logout';
import useUserProfile from '../features/authentication/useUserProfile';

export default function CurrentUser() {
    const { user } = useUserProfile();

    return (
        <div className='p-4 border-t border-gray-100 flex items-center justify-between mt-auto'>
            <div className='flex items-center space-x-2'>
                <img
                    src={user.avatar ? user.avatar : '/default-user.jpg'}
                    alt={user.fullName}
                    className='w-8 h-8 rounded-full object-cover ring-1 ring-blue-200 shadow-sm'
                />
                <div className='flex-1 min-w-0'>
                    <h3 className='text-xs font-medium text-gray-900 truncate'>
                        {user.fullName}
                    </h3>
                    <div className='text-[10px] text-green-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-green-500 rounded-full mr-1'></span>
                        Online
                    </div>
                </div>
            </div>

            <Logout />
        </div>
    );
}
