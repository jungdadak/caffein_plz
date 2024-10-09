'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js 등록
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function Analytics() {
  const data = {
    labels: ['카메라 1', '카메라 2', '카메라 3', '카메라 4'],
    datasets: [
      {
        label: '감지된 이벤트 수',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(201, 165, 55, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '카메라별 이벤트 통계',
      },
    },
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <Bar data={data} options={options} />
    </div>
  );
}
