import { Link } from 'react-router';
import Logo from '../components/Logo';
import LoginForm from '../features/authentication/LoginForm';

export default function Login() {
    return (
        <main className='min-h-screen grid place-items-center bg-gray-900 p-4'>
            <div className='w-full max-w-[420px] bg-white rounded-2xl px-8 py-6 flex flex-col gap-6 shadow-lg'>
                <Logo />

                <h1 className='text-xl font-semibold text-gray-600 text-center'>
                    Welcome back
                </h1>

                <LoginForm />
                <p className='text-center text-gray-500 max-[420px]:text-sm'>
                    Don't have an account?{' '}
                    <Link
                        to='/signup'
                        className='text-blue-500 hover:underline'>
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    );
}
