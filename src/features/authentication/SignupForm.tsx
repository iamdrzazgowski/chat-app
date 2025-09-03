import { useForm, type SubmitHandler } from 'react-hook-form';
import { useSignup } from './useSignup';
import type { SignupFormFields } from '../../types/form';
import Error from '../../components/Error';

const inputStyle =
    'w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-[420px]:text-xs max-[420px]:py-2';
const box = 'flex flex-col gap-1 w-full';

export default function SignupForm() {
    const { register, handleSubmit, getValues, reset, formState } =
        useForm<SignupFormFields>();
    const { signup, isLoading } = useSignup();
    const { errors } = formState;

    const onSubmit: SubmitHandler<SignupFormFields> = ({
        email,
        password,
        fullName,
    }) => {
        signup({ email, password, fullName }, { onSettled: () => reset() });
    };

    return (
        <form
            className='flex flex-col gap-4 w-full max-w-sm mx-auto px-4 max-[420px]:gap-3 max-[420px]:px-2'
            onSubmit={handleSubmit(onSubmit)}>
            <div className={box}>
                <label
                    htmlFor='fullName'
                    className='text-sm text-gray-500 mb-1 max-[420px]:text-xs'>
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
                {errors?.fullName?.message && (
                    <Error message={errors?.fullName?.message} />
                )}
            </div>

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
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Please provide a valid email address',
                        },
                    })}
                    disabled={isLoading}
                />
                {errors?.email?.message && (
                    <Error message={errors?.email?.message} />
                )}
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
                        minLength: {
                            value: 8,
                            message: 'Password needs a minimum of 8 characters',
                        },
                    })}
                    disabled={isLoading}
                />
                {errors?.password?.message && (
                    <Error message={errors?.password?.message} />
                )}
            </div>

            <div className={box}>
                <label
                    htmlFor='passwordConfirm'
                    className='text-sm text-gray-500 mb-1 max-[420px]:text-xs'>
                    Repeat Password
                </label>
                <input
                    className={inputStyle}
                    id='passwordConfirm'
                    type='password'
                    {...register('passwordConfirm', {
                        required: 'This field is required',
                        validate: (value) =>
                            value === getValues().password ||
                            'Passwords need to match',
                    })}
                    disabled={isLoading}
                />
                {errors?.passwordConfirm?.message && (
                    <Error message={errors?.passwordConfirm?.message} />
                )}
            </div>

            <button
                type='submit'
                className='w-full mt-4 bg-blue-600 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-700 shadow-sm font-medium text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-[420px]:py-2.5 max-[420px]:text-sm'>
                {isLoading ? 'Signing up...' : 'Sign Up'}
            </button>
        </form>
    );
}
