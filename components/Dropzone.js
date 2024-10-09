// components/DragAndDropUpload.js
'use client';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // 파일 업로드 로직을 여기에 추가합니다.
    console.log(acceptedFiles);
    // 예: FormData를 사용하여 FastAPI 백엔드로 전송
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="bg-black bg-opacity-80 w-full h-full m-auto rounded-lg p-6 border-2 border-dashed border-gray-300 
      flex flex-col items-center justify-center cursor-pointer 
      transition-colors duration-200 
      hover:border-blue-400 
      ${isDragActive ? 'bg-blue-50 border-blue-400' : ''}"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-400">냠냠</p>
      ) : (
        <p className="text-white text-xl">Upload files...</p>
      )}
    </div>
  );
};

export default DragAndDropUpload;
