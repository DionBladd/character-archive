'use client'
import {FiSun, FiMoon} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch(){
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    if(!mounted) {
        return <div className="w-6 h-6" />;
    }

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
    );
}