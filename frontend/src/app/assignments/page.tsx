'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileCheck, Sparkles } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import LoadingState from '../../components/common/LoadingState';

export default function AssignmentsPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <LoadingState message="Loading assignments..." />;
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
          Assignments & Problem Sets
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Targeted practice problems generated automatically to reinforce weak topics.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs text-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <FileCheck className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">AI Assignment Generator</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
          The assignment generator will synthesize multi-level coding problems and theoretical
          challenges tailored to your current syllabus in Phase 2.
        </p>
      </div>
    </div>
  );
}