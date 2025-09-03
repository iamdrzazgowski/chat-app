import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function EmptyChatroom() {
    return (
        <div className='flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className='text-center'>
                <IoChatbubbleEllipsesOutline className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
                    Welcome to ChatApp!
                </h2>
                <p className='text-gray-500'>
                    Select a friend from the list to start a conversation
                </p>
            </div>
        </div>
    );
}
