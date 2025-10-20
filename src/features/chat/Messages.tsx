import { useParams } from 'react-router';
import useMessages from './useMessages';
import { useMessagesSubscription } from './useMessagesSubscription';
import useUserProfile from '../authentication/useUserProfile';
import MessageBubble from './MessageBubble';
import { useEffect, useRef } from 'react';

export default function Messages() {
    const { chatId } = useParams();
    const { user } = useUserProfile();
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    const { messages } = useMessages(String(chatId));
    useMessagesSubscription(String(chatId));
    console.log(messages);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className='p-4 space-y-4 w-full mx-auto'>
            {messages?.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                    isCurrentUser={user.id === message.profile.id}
                />
            ))}
            <div ref={endOfMessagesRef} />
        </div>
    );
}
