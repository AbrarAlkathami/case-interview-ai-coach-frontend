"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [selected, setSelected] = useState("EN");
  const router = useRouter();

  const changeLanguage = (locale: "en" | "ar") => {
    document.cookie = `locale=${locale}; path=/`;

    setSelected(locale.toUpperCase());

    router.refresh();
  };

  return (
    <div className="relative inline-flex rounded-full border">
      <div
        className={`absolute inset-0 w-1/2 rounded-full bg-zinc-800 transition-transform duration-300 ${selected === "EN" ? "translate-x-0" : "translate-x-full"}`}
      ></div>
      <button
        className={`relative z-10 rounded-full px-3 py-1 text-sm transition-colors duration-300  hover:cursor-pointer `}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={` relative z-10 rounded-full px-3 py-1 text-sm transition-colors duration-300 hover:cursor-pointer `}
        onClick={() => changeLanguage("ar")}
      >
        AR
      </button>
    </div>
  );
}
