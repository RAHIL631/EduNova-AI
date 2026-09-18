'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LineChart, Sparkles } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import LoadingState from '../../components/common/LoadingState';
import ProgressChart from '../../components/dashboard/ProgressChart';
import { demoDashboardData } from '../../data/demoData';

export default function ProgressPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <LoadingState message="Loading learning analytics..." />;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Analytics Module</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Progress & Mastery Intelligence
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Historical growth trajectory, subject mastery curves, and evaluation analytics.
        </p>
      </div>

      <ProgressChart
        historyData={demoDashboardData.performanceHistory}
        subjectData={demoDashboardData.subjects}
      />
    </div>
  );
}