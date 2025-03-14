import { useState } from "react";
import { cn } from "@/lib/utils";

const HeaderSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <aside
        className={cn(
          "App-sidebar hidden fixed md:block top-0 left-0 min-h-screen border-r bg-white",
          isSidebarOpen ? "w-16" : "w-64"
        )}
      >
        <div className="sidebar-logo hidden md:flex justify-center px-2 py-3">
          <h1>Logo</h1>
        </div>
        <section className="sidebar-accordion mt-[18px] mb-6 overflow-y-auto">
          MenuLeft
        </section>
      </aside>
      <header
        className={cn(
          "App-header flex fixed top-0 md:ml-64 w-screen p-3 border-b bg-white z-50",
          isSidebarOpen ? "md:ml-16" : "md:ml-64"
        )}
      >
        <nav className="header-nav flex justify-between w-max">
          <div className="inline-flex gap-3">asd</div>
          <ul className="hidden md:space-x-1 md:fixed md:right-5 md:mt-[-2px] md:inline-flex md:mr-1 mb-1">
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderSidebar;
