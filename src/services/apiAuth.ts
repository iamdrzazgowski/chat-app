import type { SignupArgs } from '../types/api';
import supabase from './supabaseClient';

export async function signup({ email, password, fullName }: SignupArgs) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    const { data: userProfile, error: userError } = await supabase
        .from('profiles')
        .insert({
            user_id: data?.user?.id,
            fullName,
            avatar: '',
        });

    if (userError) throw new Error(userError.message);

    return userProfile;
}
