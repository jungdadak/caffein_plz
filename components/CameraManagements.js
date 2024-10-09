'use client';
import React, { useState } from 'react';

const initialCameras = [
  { id: 1, name: '카메라 1', status: '활성' },
  { id: 2, name: '카메라 2', status: '비활성' },
  { id: 3, name: '카메라 3', status: '활성' },
  // 추가 카메라...
];

export default function CameraManagement() {
  const [cameras, setCameras] = useState(initialCameras);
  const [newCameraName, setNewCameraName] = useState('');

  const addCamera = () => {
    if (newCameraName.trim() === '') return;
    const newCamera = {
      id: cameras.length + 1,
      name: newCameraName,
      status: '활성',
    };
    setCameras([...cameras, newCamera]);
    setNewCameraName('');
  };

  const toggleStatus = (id) => {
    setCameras(
      cameras.map((cam) =>
        cam.id === id
          ? { ...cam, status: cam.status === '활성' ? '비활성' : '활성' }
          : cam
      )
    );
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      {/* 카메라 추가 */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="새 카메라 이름"
          value={newCameraName}
          onChange={(e) => setNewCameraName(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 mr-2"
        />
        <button
          onClick={addCamera}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          추가
        </button>
      </div>

      {/* 카메라 목록 */}
      <ul>
        {cameras.map((cam) => (
          <li key={cam.id} className="flex justify-between items-center mb-2">
            <span>{cam.name}</span>
            <button
              onClick={() => toggleStatus(cam.id)}
              className={`px-3 py-1 rounded-md ${
                cam.status === '활성'
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
              }`}
            >
              {cam.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
