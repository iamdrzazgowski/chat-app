import supabase from './supabaseClient';

export async function searchFriends(query: string) {
    if (!query) return [];

    const { data, error } = await supabase
        .from('available_profiles')
        .select('*')
        .ilike('fullName', `%${query}%`);

    if (error) {
        console.error('Błąd wyszukiwania:', error.message);
        throw new Error(error.message);
    }

    return data ?? [];
}

export async function addFriend(friendId: string) {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userId = user?.id;

    const { data, error } = await supabase
        .from('friendships')
        .insert({
            user_id: userId,
            friend_id: friendId,
            status: 'accepted',
        })
        .select()
        .single();

    if (error) throw new Error(error.message);

    return data;
}

export async function getFriends() {
    const { data, error } = await supabase
        .from('my_friends_with_profiles')
        .select('*');

    if (error) throw new Error(error.message);

    return data;
}
