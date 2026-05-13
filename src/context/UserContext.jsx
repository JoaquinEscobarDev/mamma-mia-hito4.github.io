import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  // Token simulado, por defecto en true
  const [token, setToken] = useState(true)

  const logout = () => setToken(false)

  // Útil para futuras integraciones (login real)
  const login = () => setToken(true)

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
