'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarDays, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import LoadingState from '../../components/common/LoadingState';
import { demoDashboardData } from '../../data/demoData';

export default function PlannerPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <LoadingState message="Loading study schedule..." />;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Module Placeholder</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Smart Study Planner
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Dynamic study scheduling that adapts to your exam timetable and learning speed.
        </p>
      </div>

      {/* Active Tasks Scheduled */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">Upcoming Scheduled Sessions</h3>
        <div className="space-y-3">
          {demoDashboardData.upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600">{task.subject}</span>
                    {task.dueToday && (
                      <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                        Today
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 mt-0.5">{task.topic}</h4>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{task.durationMinutes} mins</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 border border-slate-200/80 shadow-xs text-center">
        <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
          <CalendarDays className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">AI Schedule Optimization In Phase 2</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
          The study planner architecture will calculate spaced repetition intervals and optimal
          daily workloads when connected with the AI planner engine.
        </p>
      </div>
    </div>
  );
}