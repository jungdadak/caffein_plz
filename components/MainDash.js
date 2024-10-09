import React from 'react';
import RealTimeFeed from './RealTimeFeed';
import Analytics from './Analytics';
import ActivityLog from './ActivityLog';
import CameraManagement from './CameraManagements';

export default function MainDashboard() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* 실시간 CCTV 피드 */}
      <section className="mb-6 shadow-xl p-4 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
        <h2 className="text-xl text-white font-semibold mb-4 border-b-2 border-red-800 inline-block">
          실시간 CCTV 피드
        </h2>
        <RealTimeFeed />
      </section>

      {/* 분석 통계 */}
      <section className="mb-6 shadow-xl p-4 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
        <h2 className="text-xl text-white font-semibold mb-4 border-b-2 border-red-800 inline-block">
          분석 통계
        </h2>
        <Analytics />
      </section>

      {/* 최근 활동 로그 */}
      <section className="mb-6 shadow-xl p-4 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
        <h2 className="text-xl text-white font-semibold mb-4 border-b-2 border-red-800 inline-block">
          최근 활동 로그
        </h2>
        <ActivityLog />
      </section>

      {/* 카메라 관리 */}
      <section className="mb-6 shadow-xl p-4 rounded-md bg-opacity-60 backdrop-blur-sm bg-gray-900">
        <h2 className="text-xl text-white font-semibold mb-4 border-b-2 border-red-800 inline-block">
          카메라 관리
        </h2>
        <CameraManagement />
      </section>
    </div>
  );
}
