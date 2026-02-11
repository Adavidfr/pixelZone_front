import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0D171F] text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-8 text-[#2993FA]">
        🎮 PixelZone
      </h1>

      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive ? "bg-[#1C2C3B]" : "hover:bg-[#1C2C3B]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive ? "bg-[#1C2C3B]" : "hover:bg-[#1C2C3B]"
            }`
          }
        >
          Buscar Juegos
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive ? "bg-[#1C2C3B]" : "hover:bg-[#1C2C3B]"
            }`
          }
        >
          Carrito
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive ? "bg-[#1C2C3B]" : "hover:bg-[#1C2C3B]"
            }`
          }
        >
          Admin
        </NavLink>
      </nav>
    </aside>
  )
}


