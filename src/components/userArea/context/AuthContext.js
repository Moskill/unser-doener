import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [googleUserData, setGoogleUserData] = useState(null)

  return (
    <AuthContext.Provider value={{ googleUserData, setGoogleUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
