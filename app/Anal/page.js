import DragAndDropUpload from '@/components/Dropzone';
import MainDashboard from '@/components/MainDash';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="ml-auto mt-[10vh]">
      <div className="flex w-[94%] max-w-screen-lg justify-between m-auto mt-2 mb-6 shadow-xl p-4 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
        {' '}
        <div className=" shadow-xl p-2 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
          <DragAndDropUpload />
        </div>
        <Image
          src="/image.png"
          alt="logo"
          width={240}
          height={100}
          className="rounded-md shadow-xl"
        />
      </div>
      <MainDashboard />
    </div>
  );
}
