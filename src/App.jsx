import ThemeToggleButton from "./ThemeToggleButton";
import LoginButton from "./LoginButton";
import LanguageButton from "./LanguageButton";
import "./App.css";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function App() {
  const { t } = useContext(LanguageContext);
  return (
    <>
      <LanguageButton />
      <h1>{t.title}</h1>
      <ThemeToggleButton />
      <LoginButton />
    </>
 
  );
}