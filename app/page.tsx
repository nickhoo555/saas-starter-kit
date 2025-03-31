import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">
          欢迎使用 SaaS Starter Kit
        </h1>
        <p className="mt-3 text-2xl">
          开始编辑{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            app/page.tsx
          </code>
        </p>
      </main>
    </div>
  )
} 