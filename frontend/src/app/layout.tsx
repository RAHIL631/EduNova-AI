import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '../hooks/useAuth';
import AppShell from '../components/layout/AppShell';

export const metadata: Metadata = {
  title: 'EduNova AI — Learn Smarter. Improve Faster.',
  description:
    'An AI-powered personalized learning platform that adapts to your performance, helps you learn difficult concepts, and recommends what to study next.',
  keywords: [
    'AI Education',
    'Personalized Learning',
    'Study Planner',
    'AI Tutor',
    'Adaptive Quizzes',
  ],
  authors: [{ name: 'Rahil Hassan' }, { name: 'Rihan A Melinamani' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="h-full antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}