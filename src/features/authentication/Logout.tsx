import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import useLogout from './useLogout';

export default function Logout() {
    const { logout, isLoading } = useLogout();

    return (
        <button
            className='p-1 cursor-pointer hover:text-red-500 transition-colors'
            onClick={() => logout()}
            disabled={isLoading}>
            <HiOutlineArrowRightOnRectangle className='w-5 h-5' />
        </button>
    );
}
