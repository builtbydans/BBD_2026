import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

const Layout = () => {
  return (
    <main className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row px-6 lg:px-12 pt-24">
      <Sidebar />

      <div className="flex-1 lg:ml-64 xl:ml-[30%]">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
