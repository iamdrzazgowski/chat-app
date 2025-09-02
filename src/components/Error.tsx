import type { ErrorProps } from '../types/form';

export default function Error({ message }: ErrorProps) {
    return (
        <p className='mt-1 text-sm text-red-500 max-[420px]:text-xs'>
            {message}
        </p>
    );
}
