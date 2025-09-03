import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

export default function AppLayout() {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-900'>
            <div className='flex w-3/4 h-3/4 shadow-lg rounded-2xl overflow-hidden'>
                <aside className='w-1/4 bg-gray-200 h-full'>
                    <Sidebar />
                </aside>
                <main className='w-3/4 bg-white flex flex-col h-full'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
