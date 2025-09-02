import { Link } from 'react-router';
import Logo from '../components/Logo';
import SignupForm from '../features/authentication/SignupForm';

export default function Signup() {
    return (
        <main className='min-h-screen grid place-items-center bg-gray-100 p-4'>
            <div className='w-full max-w-[420px] bg-white rounded-2xl px-8 py-6 flex flex-col gap-6 shadow-lg'>
                <Logo />

                <h1 className='text-xl font-semibold text-gray-600 text-center'>
                    Create your account
                </h1>

                <SignupForm />
                <p className='text-center text-gray-500 max-[420px]:text-sm'>
                    Do you have an account?{' '}
                    <Link to='/login' className='text-blue-500 hover:underline'>
                        Log in
                    </Link>
                </p>
            </div>
        </main>
    );
}
