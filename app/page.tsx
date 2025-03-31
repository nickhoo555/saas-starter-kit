import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '首页 | SaaS Starter Kit',
  description: '高效的SaaS启动套件，助您快速构建企业级应用',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* 英雄区域 */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              构建下一代企业<span className="text-blue-600 dark:text-blue-400">SaaS应用</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              高效、安全且可扩展的SaaS启动套件，助您快速开发和部署专业级应用
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/dashboard" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                开始使用
              </Link>
              <Link 
                href="/auth/login" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
              >
                登录账户
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/home-hero.svg"
              alt="SaaS应用示意图"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 功能亮点 */}
      <section className="w-full py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            为何选择我们的SaaS套件
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "快速开发",
                description: "预构建组件和功能模块，缩短开发周期",
                icon: "⚡"
              },
              {
                title: "企业级安全",
                description: "内置身份验证和授权系统，保障数据安全",
                icon: "🔒"
              },
              {
                title: "可扩展架构",
                description: "灵活的架构设计，轻松适应业务增长",
                icon: "📈"
              },
              {
                title: "多租户支持",
                description: "原生支持多租户，简化客户管理",
                icon: "🏢"
              },
              {
                title: "现代化界面",
                description: "优雅的UI设计，提供卓越用户体验",
                icon: "✨"
              },
              {
                title: "完善的文档",
                description: "详尽的开发文档，加速团队上手",
                icon: "📚"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="w-full py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            准备好开始您的SaaS项目了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            马上加入我们的开发者社区，获取专业支持和资源
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl hover:bg-gray-100"
            >
              立即开始
            </Link>
            <Link 
              href="#" 
              className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-blue-700 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 