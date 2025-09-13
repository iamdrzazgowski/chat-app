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
                (payload) => {
                    queryClient.setQueryData(
                        ['messages', chatId],
                        (old: any[] = []) => [...old, payload.new]
                    );
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [chatId, queryClient]);
}
