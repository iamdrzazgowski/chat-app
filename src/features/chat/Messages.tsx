import { useParams } from 'react-router';
import useMessages from './useMessages';
import { useMessagesSubscription } from './useMessagesSubscription';

export default function Messages() {
    const { chatId } = useParams();

    const { messages } = useMessages(String(chatId));
    useMessagesSubscription(String(chatId));

    console.log(messages);
    return <div>Messages</div>;
}
