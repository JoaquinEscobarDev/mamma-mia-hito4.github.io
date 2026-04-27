import { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres')
      return
    }

    alert('Inicio de sesión exitoso')
  }

  return (
    <main className="container my-5">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </main>
  )
}

export default LoginPage