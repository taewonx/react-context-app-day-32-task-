import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext";

// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { t } = useContext(LanguageContext);
//   return (
//     <button onClick={toggleTheme}>
//       {t.toggleTheme}: {theme === "light" ? t.light : t.dark}
//     </button>
//   );
// }

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  return user ? (
    <button onClick={toggleTheme}>
      {t.toggleTheme}: {theme === "light" ? t.dark : t.light}
    </button>
  ) : (
    <button onClick={() => alert(t.needLogin)}>
      {t.toggleTheme}: {user ? "" : t.needLogin}
    </button>
  )
}

