import supabase from './supabaseClient';

export async function searchFriends(query: string) {
    if (!query) return null;

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userId = user?.id;

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .ilike('fullName', `%${query}%`)
        .not('id', 'eq', userId);

    if (error) throw new Error(error.message);

    return data;
}
