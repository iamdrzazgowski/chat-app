export default function MessageBubble({ message, isCurrentUser }) {
    return (
        <div
            className={`flex mb-4 ${
                isCurrentUser ? 'justify-end' : 'justify-start'
            }`}>
            {!isCurrentUser && (
                <div className='flex-shrink-0 mr-3'>
                    <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold'>
                        {message.profile?.fullName?.charAt(0).toUpperCase() ||
                            'U'}
                    </div>
                </div>
            )}

            <div
                className={`max-w-xs lg:max-w-md ${
                    isCurrentUser ? 'order-1' : 'order-2'
                }`}>
                <div
                    className={`mb-1 text-xs text-gray-500 ${
                        isCurrentUser ? 'text-right' : 'text-left'
                    }`}>
                    {message.profile?.fullName || 'Użytkownik'}
                </div>

                <div
                    className={`px-4 py-2 rounded-lg shadow ${
                        isCurrentUser
                            ? 'bg-blue-500 text-white rounded-br-sm'
                            : 'bg-gray-200 text-gray-800 rounded-bl-sm'
                    }`}>
                    <p className='text-sm'>{message.content}</p>
                </div>
            </div>

            {isCurrentUser && (
                <div className='flex-shrink-0 ml-3 order-2'>
                    <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold'>
                        {message.profile?.fullName?.charAt(0).toUpperCase() ||
                            'T'}
                    </div>
                </div>
            )}
        </div>
    );
}
