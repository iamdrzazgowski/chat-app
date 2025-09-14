import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import supabase from '../../services/supabaseClient';

export function useMessagesSubscription(chatId: string) {
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!chatId) return;

        const subscription = supabase
            .channel(`realtime-messages-${chatId}`, {
                config: {
                    broadcast: { self: true },
                },
            })
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'messages',
                    filter: `chat_id=eq.${chatId}`,
                },
                async (payload) => {
                    // 1. Pobieramy profil dla nowej wiadomości
                    const { data: profile, error: profileError } =
                        await supabase
                            .from('profiles')
                            .select('*')
                            .eq('id', payload.new.user_id)
                            .single();

                    if (profileError) {
                        console.error('Błąd pobierania profilu:', profileError);
                    }

                    // 2. Łączymy wiadomość z profilem
                    const messageWithProfile = {
                        ...payload.new,
                        profile: profile || null,
                    };

                    // 3. Aktualizujemy cache React Query
                    queryClient.setQueryData(
                        ['messages', chatId],
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (old: any[] = []) => [...old, messageWithProfile]
                    );
                }
            )
            .subscribe((status) => console.log('Status kanału:', status));

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [chatId, queryClient]);
}
