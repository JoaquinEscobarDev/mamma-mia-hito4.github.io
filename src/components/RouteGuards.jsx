import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

// Solo permite el acceso si hay token. Si no, redirige a /login.
export const ProtectedRoute = ({ children }) => {
  const { token } = useUser()
  if (!token) return <Navigate to="/login" replace />
  return children
}

// Solo permite el acceso si NO hay token. Si hay, redirige al home.
export const PublicRoute = ({ children }) => {
  const { token } = useUser()
  if (token) return <Navigate to="/" replace />
  return children
}
