import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}