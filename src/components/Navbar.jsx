import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useUser } from "../context/UserContext"

const Navbar = () => {
  const { total } = useCart()
  const { token, logout } = useUser()

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      <Link className="navbar-brand" to="/">
        🍕 Mamma Mía
      </Link>

      <div className="d-flex gap-2">

        {/* Siempre visible */}
        <Link className="btn btn-outline-light" to="/">
          Home
        </Link>

        {token ? (
          <>
            <Link className="btn btn-outline-light" to="/profile">
              Profile
            </Link>
            <button className="btn btn-outline-light" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline-light" to="/register">
              Register
            </Link>
          </>
        )}

        {/* Siempre visible */}
        <Link className="btn btn-warning" to="/cart">
          🛒 Total: ${total.toLocaleString()}
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
