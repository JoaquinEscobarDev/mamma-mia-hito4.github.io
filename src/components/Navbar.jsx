import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Navbar = () => {
  const { total } = useCart()

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      <Link className="navbar-brand" to="/">
        🍕 Mamma Mía
      </Link>

      <div className="d-flex gap-2">

        <Link className="btn btn-outline-light" to="/">
          Home
        </Link>

        <Link className="btn btn-outline-light" to="/login">
          Login
        </Link>

        <Link className="btn btn-outline-light" to="/register">
          Register
        </Link>

        <Link className="btn btn-outline-light" to="/profile">
          Profile
        </Link>

        <Link className="btn btn-warning" to="/cart">
          🛒 Total: ${total.toLocaleString()}
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
