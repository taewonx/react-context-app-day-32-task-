import { createContext, useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { t } = useContext(LanguageContext);
  const login = () => setUser({ name: t.name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };