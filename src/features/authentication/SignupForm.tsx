import { useForm, type SubmitHandler } from 'react-hook-form';
import { useSignup } from './useSignup';
import type { SignupFormFields } from '../../types/api';

const inputStyle =
    'border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
const box = 'flex flex-col gap-1';

export default function SignupForm() {
    const { register, handleSubmit, getValues, reset, formState } =
        useForm<SignupFormFields>();
    // const { errors } = formState;
    const { signup, isLoading } = useSignup();

    const onSubmit: SubmitHandler<SignupFormFields> = ({
        email,
        password,
        fullName,
    }) => {
        signup(
            { email, password, fullName },
            {
                onSettled: () => reset(),
            }
        );
    };

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <div className={box}>
                <label
                    htmlFor='fullName'
                    className='text-sm text-gray-700 mb-1'>
                    Full Name
                </label>
                <input
                    className={inputStyle}
                    id='fullName'
                    type='text'
                    {...register('fullName', {
                        required: 'This field is required',
                    })}
                    disabled={isLoading}
                />
            </div>

            <div className={box}>
                <label htmlFor='email' className='text-sm text-gray-700 mb-1'>
                    Email
                </label>
                <input
                    className={inputStyle}
                    id='email'
                    type='email'
                    {...register('email', {
                        required: 'This field is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Please provide a valid email address',
                        },
                    })}
                    disabled={isLoading}
                />
            </div>

            <div className={box}>
                <label
                    htmlFor='password'
                    className='text-sm text-gray-700 mb-1'>
                    Password
                </label>
                <input
                    className={inputStyle}
                    id='password'
                    type='password'
                    {...register('password', {
                        required: 'This field is required',
                        minLength: {
                            value: 8,
                            message: 'Password needs a minimum of 8 characters',
                        },
                    })}
                />
            </div>

            <div className={box}>
                <label
                    htmlFor='passwordConfirm'
                    className='text-sm text-gray-700 mb-1'>
                    Repeat Password
                </label>
                <input
                    className={inputStyle}
                    id='passwordConfirm'
                    type='password'
                    {...register('passwordConfirm', {
                        required: 'This field is required',
                        validate: (value) => {
                            return (
                                value === getValues().password ||
                                'Passwords need to match'
                            );
                        },
                    })}
                    disabled={isLoading}
                />
            </div>

            <button
                type='submit'
                className='w-full mt-4 bg-blue-600 text-white py-3 rounded-2xl cursor-pointer hover:bg-blue-700 shadow-sm font-medium text-base border-none transition-colors'>
                Sign Up
            </button>
        </form>
    );
}
