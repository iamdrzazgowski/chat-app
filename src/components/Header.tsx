import { HiOutlineDotsVertical } from 'react-icons/hi';
import Logo from './Logo';

export default function Header() {
    return (
        <div className='flex items-center justify-between p-4 border-b border-gray-300'>
            <Logo small={true} />
            <button className='p-2 cursor-pointer'>
                <HiOutlineDotsVertical className='w-6 h-6' />
            </button>
        </div>
    );
}
