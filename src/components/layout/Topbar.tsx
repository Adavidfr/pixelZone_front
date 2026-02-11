import { Link } from "react-router-dom"

export default function Topbar() {
  return (
    <header className="w-full bg-[#1C2C3B] px-6 py-4 flex items-center justify-between">
      
      {/* Search */}
      <div className="w-1/3">
        <input
          type="text"
          placeholder="Buscar juegos..."
          className="w-full px-4 py-2 rounded-lg bg-[#0D171F] text-white outline-none focus:ring-2 focus:ring-[#2993FA]"
        />
      </div>

      {/* User actions */}
      <div className="flex items-center gap-4 text-white">
        <Link to="/login" className="hover:text-[#2993FA]">
          Login
        </Link>

        <Link
          to="/cart"
          className="bg-[#2993FA] px-4 py-2 rounded-lg hover:opacity-90"
        >
          🛒 Carrito
        </Link>
      </div>
    </header>
  )
}


