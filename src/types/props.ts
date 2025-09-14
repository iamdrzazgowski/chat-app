export type MessageBubbleProps = {
    message: {
        chat_id: string;
        content: string;
        created_at: string;
        id: number;
        profile: {
            avatar: string;
            fullName: string;
            id: string;
        };
        user_id: string;
    };
    isCurrentUser: boolean;
};
