import React from 'react';
import { HelpCircle, FileCheck, CalendarDays, Clock, CheckCircle2 } from 'lucide-react';
import { RecentActivityItem, UpcomingTaskItem } from '../../data/demoData';

interface RecentActivityProps {
  activities: RecentActivityItem[];
  upcomingTasks: UpcomingTaskItem[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({
  activities,
  upcomingTasks,
}) => {
  const getActivityIcon = (type: RecentActivityItem['type']) => {
    switch (type) {
      case 'quiz':
        return <HelpCircle className="w-4 h-4 text-blue-600" />;
      case 'assignment':
        return <FileCheck className="w-4 h-4 text-emerald-600" />;
      case 'plan':
        return <CalendarDays className="w-4 h-4 text-purple-600" />;
    }
  };

  const getActivityBg = (type: RecentActivityItem['type']) => {
    switch (type) {
      case 'quiz':
        return 'bg-blue-50';
      case 'assignment':
        return 'bg-emerald-50';
      case 'plan':
        return 'bg-purple-50';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Activity Log */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {activities.map((item) => (
            <div key={item.id} className="flex items-start gap-3.5">
              <div
                className={`w-9 h-9 rounded-xl ${getActivityBg(
                  item.type
                )} flex items-center justify-center shrink-0 mt-0.5`}
              >
                {getActivityIcon(item.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-slate-800 truncate">{item.title}</h4>
                  {item.score !== undefined && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {item.score}%
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                <span className="text-[11px] text-slate-400 mt-1 block">{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Study Schedule */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">Upcoming Study Tasks</h3>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {task.subject}
                    </span>
                    {task.dueToday && (
                      <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        Due Today
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 mt-1 truncate">{task.topic}</h4>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{task.durationMinutes} mins</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;