import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function Logo() {
    return (
        <div className='flex gap-2 items-center justify-center'>
            <IoChatbubbleEllipsesOutline className='w-12 h-12 text-blue-600 max-[420px]:w-9 max-[420px]:h-9' />
            <h1 className='text-3xl font-bold text-gray-800 max-[420px]:text-2xl'>
                ChatApp
            </h1>
        </div>
    );
}
