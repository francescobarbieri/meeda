import AppSidebar from "./components/AppSidebar";
import AppTopbar from "./components/AppTopbar";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative flex min-h-svh flex-1 flex-col">
        <AppTopbar />
      </main>
    </SidebarProvider>
  );
}

export default App;
