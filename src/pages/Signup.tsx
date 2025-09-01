import React from 'react';

import Logo from '../components/Logo';
import SignupForm from '../features/authentication/SignupForm';

export default function Signup() {
    return (
        <main className='min-h-screen grid grid-cols-[20rem] content-center justify-center '>
            <div className='bg-gray-50 rounded-xl px-6 py-4 flex flex-col gap-8'>
                <Logo />
                <SignupForm />
            </div>
        </main>
    );
}
