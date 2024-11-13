// components/Dropzone.js
'use client';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // 파일 업로드 로직을 여기에 추가합니다.
    console.log(acceptedFiles);
    // 예: FormData를 사용하여 FastAPI 백엔드로 전송
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`w-full h-48 rounded-lg p-6 flex flex-col items-center justify-center border-2 border-dashed transition-colors duration-200
        ${
          isDragActive
            ? 'bg-gray-600 border-blue-400'
            : 'bg-gray-700 border-gray-500 hover:border-blue-500'
        } cursor-pointer`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-400 text-lg">파일을 놓으세요...</p>
      ) : (
        <p className="text-gray-300 text-lg">
          파일을 드래그하거나 클릭하여 업로드하세요
        </p>
      )}
    </div>
  );
};

export default Dropzone;
