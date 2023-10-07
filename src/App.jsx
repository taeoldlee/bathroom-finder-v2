import { useEffect } from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";



export function App() {
    // redirect landing page on refresh
    let performanceEntries = performance.getEntriesByType("navigation");
    if (performanceEntries.length > 0 && performanceEntries[0].type === "reload") {
      window.location.href = '/';
    }

return (
  <>
    <header>
      <Header />
    </header>
    <main className="flex flex-col min-h-screen bg-white">
      <div className="w-full h-[55px]"></div>
      <div className="flex-grow container mx-auto p-4 flex justify-center">
        <div className="w-[90%] h-full flex flex-col">
          <Outlet />
        </div>
      </div>
      <div className="w-full h-[15px]"></div>
    </main>
  </>
);
}