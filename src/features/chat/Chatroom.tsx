import Messages from './Messages';
import SendMessage from './SendMessage';

export default function Chatroom() {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex-1 overflow-y-auto min-h-0'>
                <Messages />
            </div>

            <div>
                <SendMessage />
            </div>
        </div>
    );
}
