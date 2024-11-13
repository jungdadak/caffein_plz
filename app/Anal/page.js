// app/Anal/page.js
'use client';
import DragAndDropUpload from '@/components/Dropzone';
import MainDashboard from '@/components/MainDashboard';
import Image from 'next/image';

export default function AnalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-6">
      <Image
        src="/Typo.png"
        alt="logo"
        width={400}
        height={300}
        className="rounded-md mx-auto mt-8 shadow-lg"
      />
      <div className="mt-12">
        <div className="flex w-full max-w-screen-lg justify-center m-auto mt-2 mb-6 shadow-2xl p-6 rounded-lg bg-gray-800 bg-opacity-75 backdrop-blur-sm">
          <div className="w-full">
            <DragAndDropUpload />
          </div>
        </div>
        <MainDashboard />
      </div>
    </div>
  );
}
