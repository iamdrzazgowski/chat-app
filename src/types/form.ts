export type SignupFormFields = {
    email: string;
    password: string;
    passwordConfirm: string;
    fullName: string;
};

export type ErrorProps = {
    message?: string;
};

export type LoginFormFields = {
    email: string;
    password: string;
};
