import { useEffect } from 'react';
import useUserProfile from '../features/authentication/useUserProfile';
import { useNavigate } from 'react-router';
import type { ReactNode } from 'react';
import FullPage from './FullPage';
import Spinner from './Spinner';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { isLoading, user } = useUserProfile();

    useEffect(() => {
        if (!isLoading && !user) {
            navigate('/login', { replace: true });
        }
    }, [isLoading, navigate, user]);

    if (isLoading)
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );

    if (!user) return null;

    return children;
}
