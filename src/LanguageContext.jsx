import { createContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  ko: { name: "태원", welcome: "환영합니다", login: "로그인", logout: "로그아웃", toggleTheme: "테마 전환", light: "밝은 모드", dark: "어두운 모드", title: "Day 32 과제: React Context API", needLogin: "로그인이 필요합니다!" },
  en: { name: "Taewon", welcome: "Welcome", login: "Login", logout: "Logout", toggleTheme: "Toggle Theme", light: "Light", dark: "Dark", title: "Day 32 Task: React Context API", needLogin: "You need to login!" },
  jp: { name: "テウォン", welcome: "ようこそ", login: "ログイン", logout: "ログアウト", toggleTheme: "テーマ切り替え", light: "ライトモード", dark: "ダークモード", title: "Day 32 タスク: React Context API", needLogin: "ログインが必要です!" }
};

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ko");
  const t = translations[lang]; // 현재 언어에 맞는 번역본 객체

  const toggleLang = (lang) => setLang(lang);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };