'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, GraduationCap, BookOpen, Target, Check, Save } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import LoadingState from '../../components/common/LoadingState';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, refreshUser } = useAuth();

  const [name, setName] = useState('');
  const [educationLevel, setEducationLevel] = useState('Undergraduate');
  const [subjectsText, setSubjectsText] = useState('DBMS, Computer Networks, NLP, Java');
  const [goalsText, setGoalsText] = useState('Master NLP concepts, Score > 85% in Finals');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    if (user) {
      setName(user.name || 'Alex Student');
      setEducationLevel(user.educationLevel || 'Undergraduate');
      if (user.subjects && user.subjects.length > 0) {
        setSubjectsText(user.subjects.join(', '));
      }
      if (user.learningGoals && user.learningGoals.length > 0) {
        setGoalsText(user.learningGoals.join(', '));
      }
    }
  }, [user]);

  if (isLoading) {
    return <LoadingState message="Loading your profile..." />;
  }

  if (!isAuthenticated) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Student Profile</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your personal learning preferences and academic focus areas.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-10">
        {savedSuccess && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Profile preferences updated successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Avatar & Basic Info Header */}
          <div className="flex items-center gap-5 pb-6 border-b border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xl flex items-center justify-center shadow-sm">
              {name ? name.slice(0, 2).toUpperCase() : 'AS'}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{name || 'Alex Student'}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{user?.email || 'alex.student@edunova.ai'}</p>
              <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold text-[11px]">
                {educationLevel}
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address (Read-only)
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  disabled
                  value={user?.email || 'alex.student@edunova.ai'}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 text-sm cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Education Level
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <select
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all cursor-pointer"
                >
                  <option value="School">School</option>
                  <option value="PUC">PUC</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Enrolled Subjects (Comma separated)
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={subjectsText}
                  onChange={(e) => setSubjectsText(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Learning Goals (Comma separated)
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Target className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={goalsText}
                  onChange={(e) => setGoalsText(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm shadow-blue-500/25 transition-all active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Save Preferences</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}