import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageButton() {
  const { toggleLang } = useContext(LanguageContext);
  return (
    <>
    <button onClick={() => toggleLang("en")}>
      English
    </button>
    <button onClick={() => toggleLang("ko")}>
      한국어
    </button>
    <button onClick={() => toggleLang("jp")}>
      日本語
    </button>
    </>
  );
}
