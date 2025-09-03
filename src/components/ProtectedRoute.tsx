import { useEffect } from 'react';
import useUserProfile from '../features/authentication/useUserProfile';
import { useNavigate } from 'react-router';
import type { ReactNode } from 'react';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { isLoading, user } = useUserProfile();

    useEffect(() => {
        if (!isLoading && (!user || !user.isAuthenticated)) navigate('/login');
    }, [isLoading, navigate, user]);

    if (isLoading) return <p>Loading...</p>;

    return children;
}
