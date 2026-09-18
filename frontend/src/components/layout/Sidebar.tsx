'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Bot,
  HelpCircle,
  FileCheck,
  CalendarDays,
  LineChart,
  User,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'AI Tutor', href: '/tutor', icon: Bot },
  { name: 'Quiz', href: '/quiz', icon: HelpCircle },
  { name: 'Assignments', href: '/assignments', icon: FileCheck },
  { name: 'Study Planner', href: '/planner', icon: CalendarDays },
  { name: 'Progress', href: '/progress', icon: LineChart },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isCurrentActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between h-screen sticky top-0 shrink-0 select-none">
      {/* Brand Header */}
      <div>
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link href="/dashboard" className="flex items-center gap-2.5 font-bold text-lg text-slate-900 tracking-tight">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <span>EduNova <span className="text-blue-600">AI</span></span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="p-4 space-y-1.5" aria-label="Main sidebar navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isCurrentActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  active
                    ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Logout Section */}
      <div className="p-4 border-t border-slate-100 space-y-2">
        <Link
          href="/profile"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all ${
            isCurrentActive('/profile')
              ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <User className="w-5 h-5 text-slate-400" />
          <span>Profile</span>
        </Link>

        {/* User Card */}
        <div className="flex items-center gap-3 px-3 py-2.5 bg-slate-50 rounded-xl border border-slate-100/80">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold flex items-center justify-center text-xs shrink-0 shadow-xs">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : 'AS'}
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-xs font-semibold text-slate-800 truncate">
              {user?.name || 'Alex Student'}
            </span>
            <span className="text-[11px] text-slate-400 truncate">
              {user?.email || 'alex.student@edunova.ai'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => logout()}
            title="Logout"
            aria-label="Logout"
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;