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

export async function sendMessage(
    userId: string,
    chatId: string,
    content: string
) {
    const { data, error } = await supabase
        .from('messages')
        .insert([
            {
                chat_id: chatId,
                user_id: userId,
                content,
            },
        ])
        .select();

    if (error) throw new Error(error.message);

    return data;
}

export async function fetchMessages(chatId: string) {
    // 1. Pobieramy wiadomości
    const { data: messages, error: messagesError } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true });

    if (messagesError) throw messagesError;
    if (!messages) return [];

    // 2. Pobieramy profile dla wszystkich user_id z wiadomości
    const userIds = [...new Set(messages.map((m) => m.user_id))];
    const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .in('id', userIds);

    if (profilesError) throw profilesError;

    // 3. Łączymy wiadomości z profilem
    const messagesWithProfiles = messages.map((message) => ({
        ...message,
        profile: profiles.find((p) => p.id === message.user_id) || null,
    }));

    return messagesWithProfiles;
}
