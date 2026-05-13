import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "./context/UserContext"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ProtectedRoute, PublicRoute } from "./components/RouteGuards"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            {/* Rutas públicas: solo accesibles si NO hay token */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route path="/cart" element={<Cart />} />

            {/* Ruta dinámica con useParams */}
            <Route path="/pizza/:id" element={<Pizza />} />

            {/* Ruta protegida: solo accesible si hay token */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* ruta explícita */}
            <Route path="/404" element={<NotFound />} />

            {/* fallback obligatorio */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  )
}

export default App
