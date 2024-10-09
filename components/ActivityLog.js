'use client';
import React from 'react';

const logs = [
  {
    id: 1,
    timestamp: '2024-04-01 10:00',
    event: '움직임 감지',
    camera: '카메라 1',
  },
  {
    id: 2,
    timestamp: '2024-04-01 10:05',
    event: '사람 인식',
    camera: '카메라 2',
  },
  {
    id: 3,
    timestamp: '2024-04-01 10:10',
    event: '차량 감지',
    camera: '카메라 3',
  },
  // 추가 로그...
];

export default function ActivityLog() {
  return (
    <div className="bg-white rounded-md shadow-md p-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              시간
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              이벤트
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              카메라
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {logs.map((log) => (
            <tr key={log.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {log.timestamp}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {log.event}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {log.camera}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
