'use client';
// 이미지 파일 임포트
import logo from '/public/logo.ico';
import nextjs from '/public/nextjslogo.jpeg';
import cuda from '/public/cudalogo.png';
import aws from '/public/aws.jpeg';
import pytorch from '/public/pytorch.png';
import express from '/public/expresslogo.png';
import tailwind from '/public/tailwind.png';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="overflow-y-auto z-50">
      <nav
        className={`fixed top-0 left-0 w-[20%] min-w-[300px] max-w-[400px] h-full bg-opacity-60 backdrop-blur-sm bg-gray-900 rounded-md transition-transform duration-500 ${
          open ? 'translate-x-0' : '-translate-x-[97%]'
        }`}
      >
        <button
          className="fixed top-1/4 -right-8 bg-opacity-60 h-[10%] border-r-2 border-red-800 p-2 bg-gray-900 text-white rounded-r-md transform -translate-y-1/2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ❖
        </button>
        <div>
          <Image
            src={logo}
            alt="CaFFeIn"
            width={70}
            height={70}
            className="m-auto rounded-full shadow-2xl mt-4 mb-4"
          />
        </div>
        <div className="text-center text-white">
          <h1 className="m-3 text-left shadow-lg block"> log in please </h1>
          <form
            id="login-nav"
            className="flex flex-col p-2 border-b-2 border-t-2 border-black rounded-md m-1"
          >
            <input
              type="text"
              id="id"
              placeholder="ID here"
              className="p-2 m-1 rounded-md bg-gray-800 text-white text-center"
            />
            <input
              type="password"
              id="password"
              placeholder="passwords here"
              className="p-2 m-1 rounded-md bg-gray-800 text-white text-center"
            />
            <button className="p-2 m-1 rounded-md bg-black text-red text-xs text-center border-2 border-red-800">
              log in
            </button>
            <a className="text-left text-blue-300" href="#">
              sign up here
            </a>
          </form>

          <h1 className="mx-3 text-left shadow-lg block"> Start Guidance </h1>
          <div className="text-left p-2 border-b-2 border-t-2 border-black rounded-md m-1 bg-gray-700">
            <p className="text-md text-red-500 font-bold">Step 1</p>
            <p className="text-xs text-white">
              <a
                href="https://your-login-link.com"
                className="text-blue-400 underline"
              >
                로그인
              </a>{' '}
              또는{' '}
              <a
                href="https://your-signup-link.com"
                className="text-blue-400 underline"
              >
                가입
              </a>{' '}
              하세요.
            </p>

            <p className="text-md text-red-500 font-bold mt-3">Step 2</p>
            <p className="text-xs text-white">
              영상을 업로드 하세요 (영상 파일과 .smi 파일이 모두 필요합니다){' '}
              <br />
              <span className="text-green-400">
                예: <code>0901.avi</code>, <code>0901.smi</code>
              </span>
            </p>

            <p className="text-md text-red-500 font-bold mt-3">Step 3</p>
            <p className="text-xs text-white">
              업로드후 Start 버튼을 눌러주세요
            </p>

            <p className="text-lg text-red-500 font-bold mt-3">Step 4</p>
            <p className="text-xs text-white">
              완료 메시지를 받으면{' '}
              <a
                href="https://your-my-page-link.com"
                className="text-blue-400 underline"
              >
                my
              </a>{' '}
              에서 결과를 확인하세요
            </p>
          </div>

          <h1 className="m-3 text-left shadow-lg block "> made with </h1>
          <div className="grid grid-cols-2 p-2 border-b-2 border-t-2 border-black rounded-md m-1">
            <div className="w-full h-20 overflow-hidden">
              <Image
                src={nextjs}
                alt="nextjs"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="w-full h-20 overflow-hidden">
              <Image
                src={cuda}
                alt="cuda"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="w-full h-20 overflow-hidden">
              <Image
                src={aws}
                alt="aws"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="w-full h-20 overflow-hidden">
              <Image
                src={pytorch}
                alt="pytorch"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="w-full h-20 overflow-hidden">
              <Image
                src={express}
                alt="express"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="w-full h-20 overflow-hidden">
              <Image
                src={tailwind}
                alt="tailwind"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="absolute bottom-0 w-full text-xs bg-opacity-60 backdrop-blur-sm bg-gray-900 p-4 text-center text-white">
            © Caffein <br />
            developed by Andy_Lee
          </div>
        </div>
      </nav>
    </div>
  );
}
