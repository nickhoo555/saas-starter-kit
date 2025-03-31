import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - 页面未找到</h1>
      <p className="mt-4">您访问的页面不存在。</p>
      <Link href="/" className="mt-4 text-blue-500 hover:text-blue-700">
        返回首页
      </Link>
    </div>
  )
} 