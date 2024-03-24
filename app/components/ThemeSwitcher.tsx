"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, Sun, SunMoon } from "lucide-react";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`w-fit absolute right-5 top-2 p-4  dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >

      {theme === "light" ? <div className="flex flex-row gap-4 items-center justify-center"><h1 className="text-sm">Dark Mode</h1> <MoonIcon /> </div> : <div className="flex flex-row gap-4 items-center justify-center"> <h1 className="text-sm">Light Mode</h1> <Sun /> </div>}
    </button >
  );
};
