import React from 'react';

import Logo from '../components/Logo';
import SignupForm from '../features/authentication/SignupForm';

export default function Signup() {
    return (
        <main className='min-h-screen grid grid-cols-[24rem] content-center justify-center bg-gray-100 p-4'>
            <div className='bg-white rounded-2xl px-8 py-6 flex flex-col gap-6 shadow-lg'>
                <Logo />

                <h1 className='text-2xl font-semibold text-gray-800 text-center'>
                    Create your account
                </h1>

                <SignupForm />
            </div>
        </main>
    );
}
