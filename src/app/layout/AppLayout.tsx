import { Outlet } from "react-router-dom"
import Sidebar from "../../components/layout/Sidebar"
import Topbar from "../../components/layout/Topbar"

export default function AppLayout() {
  return (
    <div className="flex bg-[#1C2C3B] text-white min-h-screen">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
