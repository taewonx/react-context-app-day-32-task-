import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { LanguageContext } from "./LanguageContext";

export default function LoginButton() {
  const { user, login, logout } = useContext(AuthContext);
  const { t } = useContext(LanguageContext);

  return user ? (
    <div>
      <p>{t.welcome} {t.name}!</p>
      <button onClick={logout}>{t.logout}</button>
    </div>
  ) : (
    <button onClick={login}>{t.login}</button>
  );
}

