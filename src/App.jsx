import React from 'react';
import AppSidebar from './components/AppSidebar';
import AppTopbar from './components/AppTopbar';
import { SidebarProvider } from './components/ui/sidebar';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Investments from './pages/Investments';
import Error404 from './pages/Error404';

const router = createHashRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <Error404 />,
  },
  {
    path: 'investments',
    element: <Investments />,
  }
]);

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative flex min-h-svh flex-1 flex-col">
        <AppTopbar />
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </main>
    </SidebarProvider>
  );
}

export default App;
