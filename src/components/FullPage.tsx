import type { ReactNode } from 'react';

export default function FullPage({ children }: { children: ReactNode }) {
    return (
        <div className='w-full h-[100vh] bg-gray-900 flex items-center justify-center'>
            {children}
        </div>
    );
}
