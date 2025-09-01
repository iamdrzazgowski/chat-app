import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function Logo() {
    return (
        <div className='flex gap-2 items-center justify-center'>
            <IoChatbubbleEllipsesOutline className='w-12 h-12 text-blue-600' />
            <span className='text-3xl font-bold text-gray-800'>Chat</span>
        </div>
    );
}
