import { useForm, type SubmitHandler } from 'react-hook-form';
import type { LoginFormFields } from '../../types/form';
import useLogin from './useLogin';

const inputStyle =
    'w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-[420px]:text-xs max-[420px]:py-2';
const box = 'flex flex-col gap-1 w-full';

export default function LoginForm() {
    const { register, handleSubmit, reset } = useForm<LoginFormFields>();

    const { login, isLoading } = useLogin();

    const onSubmit: SubmitHandler<LoginFormFields> = ({
        email,
        password,
    }: LoginFormFields) => {
        login({ email, password }, { onSettled: () => reset() });
    };

    return (
        <form
            className='flex flex-col gap-4 w-full max-w-sm mx-auto px-4 max-[420px]:gap-3 max-[420px]:px-2'
            onSubmit={handleSubmit(onSubmit)}>
            <div className={box}>
                <label
                    htmlFor='email'
                    className='text-sm text-gray-500 mb-1 max-[420px]:text-xs'>
                    Email
                </label>
                <input
                    className={inputStyle}
                    id='email'
                    type='email'
                    {...register('email', {
                        required: 'This field is required',
                    })}
                    disabled={isLoading}
                />
            </div>

            <div className={box}>
                <label
                    htmlFor='password'
                    className='text-sm text-gray-500 mb-1 max-[420px]:text-xs'>
                    Password
                </label>
                <input
                    className={inputStyle}
                    id='password'
                    type='password'
                    {...register('password', {
                        required: 'This field is required',
                    })}
                    disabled={isLoading}
                />
            </div>

            <button
                type='submit'
                className='w-full mt-4 bg-blue-600 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-700 shadow-sm font-medium text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-[420px]:py-2.5 max-[420px]:text-sm'>
                Log in
            </button>
        </form>
    );
}
