'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  TrendingUp,
  Award,
  Flame,
  CheckSquare,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { demoDashboardData } from '../../data/demoData';
import DashboardCard from '../../components/dashboard/DashboardCard';
import SubjectCard from '../../components/dashboard/SubjectCard';
import ProgressChart from '../../components/dashboard/ProgressChart';
import WeakTopics from '../../components/dashboard/WeakTopics';
import RecommendationCard from '../../components/dashboard/RecommendationCard';
import RecentActivity from '../../components/dashboard/RecentActivity';
import LoadingState from '../../components/common/LoadingState';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  // Route protection
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <LoadingState message="Loading your student learning dashboard..." />;
  }

  if (!isAuthenticated) {
    return null;
  }

  // Use authenticated user's first name or demo data
  const displayName = user?.name ? user.name.split(' ')[0] : demoDashboardData.student.name;

  return (
    <div className="space-y-8 pb-12">
      {/* 1. Header with greeting and level */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, {displayName} 👋
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            You&apos;re making steady progress this semester. Keep the momentum going!
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-semibold text-slate-700">
            Level: <span className="text-blue-600 font-bold">{user?.educationLevel || 'Undergraduate'}</span>
          </div>
        </div>
      </div>

      {/* 2. Top Summary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <DashboardCard
          title="Overall Progress"
          value={`${demoDashboardData.metrics.overallProgress}%`}
          subtitle="Coursework and syllabus coverage"
          icon={TrendingUp}
          iconBgColor="bg-blue-50"
          iconTextColor="text-blue-600"
          trend={{ value: '4% this week', isPositive: true }}
        />
        <DashboardCard
          title="Average Quiz Score"
          value={`${demoDashboardData.metrics.averageQuizScore}%`}
          subtitle="Across all evaluated subjects"
          icon={Award}
          iconBgColor="bg-emerald-50"
          iconTextColor="text-emerald-600"
          trend={{ value: '2% increase', isPositive: true }}
        />
        <DashboardCard
          title="Study Streak"
          value={`${demoDashboardData.metrics.studyStreakDays} Days`}
          subtitle="Consecutive daily learning"
          icon={Flame}
          iconBgColor="bg-amber-50"
          iconTextColor="text-amber-600"
        />
        <DashboardCard
          title="Quizzes Completed"
          value={demoDashboardData.metrics.quizzesCompleted}
          subtitle="Evaluations taken to date"
          icon={CheckSquare}
          iconBgColor="bg-indigo-50"
          iconTextColor="text-indigo-600"
        />
      </div>

      {/* 3. AI Recommendation Banner */}
      <RecommendationCard
        headline={demoDashboardData.recommendation.headline}
        details={demoDashboardData.recommendation.details}
        actionLabel={demoDashboardData.recommendation.actionLabel}
        actionHref={demoDashboardData.recommendation.actionHref}
      />

      {/* 4. Subject Performance Overview */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Subject Performance</h2>
              <p className="text-xs text-slate-500">Current mastery breakdown per enrolled course</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {demoDashboardData.subjects.map((subj) => (
            <SubjectCard key={subj.id} subject={subj} />
          ))}
        </div>
      </div>

      {/* 5. Analytics Charts & Weak Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProgressChart
            historyData={demoDashboardData.performanceHistory}
            subjectData={demoDashboardData.subjects}
          />
        </div>
        <div>
          <WeakTopics topics={demoDashboardData.weakTopics} />
        </div>
      </div>

      {/* 6. Recent Activity & Upcoming Tasks */}
      <RecentActivity
        activities={demoDashboardData.recentActivities}
        upcomingTasks={demoDashboardData.upcomingTasks}
      />
    </div>
  );
}