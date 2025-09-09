import supabase from './supabaseClient';

export async function createOrGetChat(friendId: string) {
    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        throw new Error('Brak zalogowanego użytkownika');
    }

    const userId = user.id;

    // 1. sprawdzenie czy istnieje już czat (w obie strony)
    const { data: existingChat, error: checkError } = await supabase
        .from('friends_with_chat')
        .select('chat_id')
        .or(
            `and(user_id.eq.${userId},friend_id.eq.${friendId}),and(user_id.eq.${friendId},friend_id.eq.${userId})`
        )
        .maybeSingle();

    if (checkError) throw checkError;

    if (existingChat && existingChat.chat_id) {
        return existingChat.chat_id; // ✅ istnieje
    }

    // 2. jeśli nie ma - tworzymy nowy czat
    const { data: newChat, error: chatError } = await supabase
        .from('chats')
        .insert({ is_group: false })
        .select()
        .single();

    if (chatError) throw chatError;

    // 3. dodajemy uczestników
    const { error: participantsError } = await supabase
        .from('chat_participants')
        .upsert(
            [
                { chat_id: newChat.id, user_id: userId },
                { chat_id: newChat.id, user_id: friendId },
            ],
            { onConflict: ['chat_id', 'user_id'] } // tablica kolumn, nie nazwa constraintu
        );

    if (participantsError) throw participantsError;

    return newChat.id;
}
