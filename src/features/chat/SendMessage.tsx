import { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from './useSendMessage';

export default function SendMessage() {
    const [message, setMessage] = useState('');
    const { sendMessage, isLoading } = useSendMessage();

    const handleSend = () => {
        if (message.trim()) {
            sendMessage(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className='h-16 w-full bg-white border-t border-gray-200 px-4 flex items-center'>
            <div className='flex items-end gap-3 w-full max-w-4xl mx-auto'>
                <div className='flex-1 relative'>
                    <input
                        type='text'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder='Send message'
                        className='w-full px-4 py-2 bg-gray-100 rounded-full border-0 outline-none text-gray-800 placeholder-gray-500 text-sm'
                    />
                </div>
                <button
                    onClick={handleSend}
                    disabled={!message.trim() || isLoading}
                    className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                        message.trim()
                            ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}>
                    <BsSend size={18} />
                </button>
            </div>
        </div>
    );
}
