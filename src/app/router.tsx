import { createBrowserRouter } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import AuthLayout from "./layout/AuthLayout"
import AdminLayout from "./layout/AdminLayout"

// Routes (pages)
import HomePage from "./routes/index"
import GameDetailPage from "./routes/game-detail"
import SearchPage from "./routes/search"
import CartPage from "./routes/cart"

import LoginPage from "./routes/auth-login"
import RegisterPage from "./routes/auth-register"

import AdminDashboardPage from "./routes/admin/dashboard"
import AdminGamesPage from "./routes/admin/games"
import AdminPurchasesPage from "./routes/admin/purchases"
import AdminInvoicesPage from "./routes/admin/invoices"

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/game/:appid", element: <GameDetailPage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/cart", element: <CartPage /> },
      // si quieres separar “Top Steam”
      { path: "/api", element: <HomePage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "games", element: <AdminGamesPage /> },
      { path: "purchases", element: <AdminPurchasesPage /> },
      { path: "invoices", element: <AdminInvoicesPage /> },
    ],
  },
])
