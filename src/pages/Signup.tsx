import Logo from '../components/Logo';
import SignupForm from '../features/authentication/SignupForm';

export default function Signup() {
    return (
        <main className='min-h-screen grid grid-cols-[24rem] content-center justify-center bg-gray-100 p-4 max-[420px]:grid-cols-[18rem] max-[420px]:p-2'>
            <div className='bg-white rounded-2xl px-8 py-6 flex flex-col gap-6 shadow-lg max-[420px]:px-4 max-[420px]:py-4 max-[420px]:gap-4'>
                <Logo />

                <h1 className='text-xl font-semibold text-gray-800 text-center max-[420px]:text-lg'>
                    Create your account
                </h1>

                <SignupForm />
            </div>
        </main>
    );
}
