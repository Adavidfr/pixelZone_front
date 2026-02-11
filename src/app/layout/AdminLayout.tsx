import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="min-h-screen">
      {/* Aquí luego pones sidebar admin */}
      <Outlet />
    </div>
  )
}
