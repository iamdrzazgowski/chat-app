import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function Logo({ small = false }) {
    return (
        <div className='flex gap-2 items-center justify-center'>
            <IoChatbubbleEllipsesOutline
                className={`text-blue-600 ${
                    small ? 'w-9 h-9' : 'w-12 h-12'
                } max-[420px]:w-9 max-[420px]:h-9`}
            />
            <h1
                className={`${
                    small ? 'text-2xl' : 'text-3xl'
                } font-bold text-gray-800 max-[420px]:text-2xl`}>
                ChatApp
            </h1>
        </div>
    );
}
