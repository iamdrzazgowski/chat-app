import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Login from './pages/Login';
import Chat from './pages/Chat';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }>
                        <Route index element={<Navigate replace to='chat' />} />
                        <Route path='chat' element={<Chat />} />
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position='top-center'
                gutter={12}
                containerStyle={{ margin: '8px' }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                        backgroundColor: 'var(--color-grey-0)',
                        color: 'var(--color-grey-700)',
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
