// components/Navbar.js
'use client';

// 이미지 파일 임포트
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa'; // 스피너 아이콘 임포트
import logo from '/public/logo.ico';
import nextjs from '/public/nextjslogo.jpeg';
import cuda from '/public/cudalogo.png';
import aws from '/public/aws.jpeg';
import pytorch from '/public/pytorch.png';
import express from '/public/expresslogo.png';
import tailwind from '/public/tailwind.png';

export default function Navbar({
  open,
  toggleNavbar,
  isDarkMode,
  toggleDarkMode,
}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 다크 모드에 따라 전체 페이지 배경색 변경
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.body.classList.add('bg-gray-900');
        document.body.classList.remove('bg-gray-200');
      } else {
        document.body.classList.add('bg-gray-200');
        document.body.classList.remove('bg-gray-900');
      }
    }
  }, [isDarkMode]);

  // 로그인 처리 함수
  const handleLogin = (e) => {
    e.preventDefault(); // 폼 제출 방지
    setIsLoading(true);
    // 로딩 상태를 2초 동안 유지한 후 로그인 처리
    setTimeout(() => {
      if (id === 'admin' && password === 'admin') {
        setIsLoggedIn(true);
      } else {
        alert('Invalid credentials');
      }
      setIsLoading(false);
    }, 2000); // 2초 딜레이
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    setId('');
    setPassword('');
  };

  return (
    <div className="overflow-y-auto z-50">
      <nav
        className={`fixed top-0 left-0 h-full ${
          open ? 'w-72 md:w-80' : 'w-16'
        } bg-opacity-60 backdrop-blur-sm rounded-md transition-width duration-500 ease-in-out z-50 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
        } flex flex-col justify-between`}
      >
        {/* 네브바 토글 버튼 */}
        <button
          className={`absolute top-1/4 -right-8 bg-opacity-60 h-10 w-8 border-r-2 border-red-800 p-2 rounded-r-md cursor-pointer transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`}
          onClick={toggleNavbar}
          aria-label={open ? 'Close Navbar' : 'Open Navbar'}
        >
          ❖
        </button>

        {/* 메인 콘텐츠 */}
        <div className="flex flex-col items-center mt-4 flex-1 overflow-y-auto">
          <div className="flex flex-col items-center justify-center flex-1">
            {/* 로고 */}
            <Image
              src={logo}
              alt="CaFFeIn"
              width={70}
              height={70}
              className="rounded-full shadow-2xl mb-4"
              href="/"
            />

            {/* 네브바가 열려 있을 때만 콘텐츠 표시 */}
            {open && (
              <div
                className={`text-center w-full px-4 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                {!isLoggedIn ? (
                  <>
                    {/* 로그인 섹션 */}
                    <h1 className="m-3 text-left shadow-lg block">
                      Please Log In
                    </h1>
                    <form
                      id="login-nav"
                      className={`flex flex-col p-2 border-b-2 border-t-2 rounded-md m-1 ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-600 text-white'
                          : 'bg-gray-300 border-gray-400 text-black'
                      }`}
                      onSubmit={handleLogin}
                    >
                      <input
                        type="text"
                        id="id"
                        placeholder="Enter ID"
                        className={`p-2 m-1 rounded-md text-center ${
                          isDarkMode
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                        onChange={(e) => setId(e.target.value)}
                        value={id}
                        disabled={isLoading}
                      />
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        className={`p-2 m-1 rounded-md text-center ${
                          isDarkMode
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        disabled={isLoading}
                      />
                      <button
                        className={`p-2 m-1 rounded-md text-xs text-center border-2 flex items-center justify-center ${
                          isDarkMode
                            ? 'bg-black text-red-500 border-red-800'
                            : 'bg-gray-400 text-red-600 border-red-400'
                        }`}
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <FaSpinner className="animate-spin mr-2" />
                            Loading...
                          </>
                        ) : (
                          'Log In'
                        )}
                      </button>
                      <a
                        className={`text-left ${
                          isDarkMode ? 'text-blue-300' : 'text-blue-500'
                        }`}
                        href="#"
                      >
                        Sign Up
                      </a>
                    </form>
                  </>
                ) : (
                  <>
                    {/* 로그인된 상태의 UI */}
                    <h1 className="m-3 text-left shadow-lg block">
                      Welcome, {id}!
                    </h1>
                    <button
                      className={`p-2 m-1 rounded-md text-xs text-center border-2 ${
                        isDarkMode
                          ? 'bg-black text-red-500 border-red-800'
                          : 'bg-gray-400 text-red-600 border-red-400'
                      }`}
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </>
                )}

                {/* Start Guide 섹션 */}
                <h1 className="mx-3 text-left shadow-lg block">Start Guide</h1>
                <div
                  className={`text-left p-2 border-b-2 border-t-2 rounded-md m-1 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  <p className="text-md font-bold text-red-500">Step 1</p>
                  <p className="text-xs">
                    <a
                      href="https://your-login-link.com"
                      className={`${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      } underline`}
                    >
                      Log In
                    </a>{' '}
                    or{' '}
                    <a
                      href="https://your-signup-link.com"
                      className={`${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      } underline`}
                    >
                      Sign Up
                    </a>{' '}
                    here.
                  </p>

                  <p className="text-md font-bold text-red-500 mt-3">Step 2</p>
                  <p className="text-xs">
                    Upload your video (both video file and .smi file are
                    required)
                    <br />
                    <span className="text-green-400">
                      Example: <code>0901.avi</code>, <code>0901.smi</code>
                    </span>
                  </p>

                  <p className="text-md font-bold text-red-500 mt-3">Step 3</p>
                  <p className="text-xs">
                    After uploading, press the Start button.
                  </p>

                  <p className="text-lg font-bold text-red-500 mt-3">Step 4</p>
                  <p className="text-xs">
                    Once you receive the completion message, check the results
                    on{' '}
                    <a
                      href="https://your-my-page-link.com"
                      className="text-blue-400 underline"
                    >
                      my page
                    </a>
                    .
                  </p>
                </div>

                {/* Made With 섹션 */}
                <h1 className="m-3 text-left shadow-lg block">Made with</h1>
                <div className="grid grid-cols-2 p-2 border-b-2 border-t-2 border-black rounded-md m-1">
                  {/* 각 이미지 컨테이너에 다크모드 대비한 배경색 적용 */}
                  {[nextjs, cuda, aws, pytorch, express, tailwind].map(
                    (src, index) => (
                      <div
                        key={index}
                        className={`w-full h-20 overflow-hidden ${
                          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`logo-${index}`}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 푸터 */}
        {open && (
          <div
            className={`w-full p-4 bg-opacity-60 backdrop-blur-sm text-center text-xs ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
            } rounded-b-md flex flex-col items-center`}
          >
            {/* 다크 모드 토글 버튼 */}
            <button
              onClick={toggleDarkMode}
              className={`mb-4 p-2 rounded-full transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>

            {/* 푸터 콘텐츠 */}
            <div>
              © Caffein <br />
              developed by Andy_Lee
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
