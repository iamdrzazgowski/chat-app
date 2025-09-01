import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Signup from './pages/Signup';

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
            <BrowserRouter>
                <Routes>
                    <Route index element={<Signup />} />
                    {/* <Route element={<AppLayout />}></Route> */}
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
