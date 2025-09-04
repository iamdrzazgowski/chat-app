import FriendsList from '../features/friends/FriendsList';
import CurrentUser from './CurrentUser';
import Header from './Header';

export default function Sidebar() {
    return (
        <div className='flex flex-col h-full bg-gray-200'>
            <Header />
            <div className='flex-1 flex flex-col min-h-0'>
                <FriendsList />
            </div>
            <CurrentUser />
        </div>
    );
}
