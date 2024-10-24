import React from 'react';
import AppSidebar from './components/AppSidebar';
import AppTopbar from './components/AppTopbar';
import { SidebarProvider } from './components/ui/sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Investments from './pages/Investments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
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
        <RouterProvider router={router} />
      </main>
    </SidebarProvider>
  );
}

export default App;
