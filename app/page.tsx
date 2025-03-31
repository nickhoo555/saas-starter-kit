import { Metadata } from 'next';
import HomePage from '../components/HomePage';
import env from '@/lib/env';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'BoxyHQ - SaaS Starter Kit',
  description: '企业级SaaS初创套件',
};

export default function Home() {
  // 服务器端重定向
  if (env.hideLandingPage) {
    redirect('/auth/login');
  }
  
  return <HomePage />;
}
