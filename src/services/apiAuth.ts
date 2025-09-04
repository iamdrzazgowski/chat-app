import type { LoginArgs, SignupArgs } from '../types/api';
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
            id: data?.user?.id,
            fullName,
            avatar: '',
        });

    if (userError) throw new Error(userError.message);

    return userProfile;
}

export async function login({ email, password }: LoginArgs) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const userId = session?.session?.user?.id;
    const isAuthenticated = session?.session?.user?.role === 'authenticated';

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

    if (error) throw new Error(error.message);

    const userData = {
        ...data,
        isAuthenticated,
    };

    return userData;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
}
