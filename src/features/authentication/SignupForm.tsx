const inputStyle =
    'border border-gray-300 bg-gray-50 rounded-md shadow-sm px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
const box = 'flex flex-col gap-1';

export default function SignupForm() {
    return (
        <form className='flex flex-col gap-4'>
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
                    required
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
                    required
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
                    required
                />
            </div>

            <div className={box}>
                <label
                    htmlFor='repeatPassword'
                    className='text-sm text-gray-700 mb-1'>
                    Repeat Password
                </label>
                <input
                    className={inputStyle}
                    id='repeatPassword'
                    type='password'
                    required
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
