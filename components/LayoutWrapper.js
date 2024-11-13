// components/LayoutWrapper.js
'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function LayoutWrapper({ children }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    const newNavbarState = !isNavbarOpen;
    setIsNavbarOpen(newNavbarState);
    localStorage.setItem('navbarOpen', newNavbarState); // 네브바 상태를 localStorage에 저장
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState); // 다크모드 상태를 localStorage에 저장
    if (newDarkModeState) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // 다크모드와 네브바 상태를 localStorage에서 불러와 초기화
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedNavbarOpen = localStorage.getItem('navbarOpen');

    if (savedDarkMode) {
      const isDark = savedDarkMode === 'true';
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }

    if (savedNavbarOpen) {
      setIsNavbarOpen(savedNavbarOpen === 'true');
    }
  }, []);

  return (
    <div className="flex">
      <Navbar
        open={isNavbarOpen}
        toggleNavbar={toggleNavbar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main
        className={`flex-1 transition-all duration-500 ${
          isNavbarOpen ? 'ml-72 md:ml-80' : 'ml-16'
        } ${
          isDarkMode
            ? 'bg-gradient-to-br from-[#1E1F26] to-[#2A2A2A] text-white'
            : 'bg-[#F4F4F9] text-black'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
