'use client';
import DragAndDropUpload from '@/components/Dropzone';
import MainDashboard from '@/components/MainDash';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-3 w-full rounded-sm">
      <Image
        src="/Typo.png"
        alt="logo"
        width={400}
        height={300}
        className="rounded-md mx-auto mt-8"
      />
      <div className="mt-12">
        <div className="flex w-full max-w-screen-lg justify-between m-auto mt-2 mb-6 shadow-xl p-4 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
          <div className="shadow-xl p-2 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
            <DragAndDropUpload />
          </div>
        </div>
        <MainDashboard />
      </div>
    </div>
  );
}
