'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">发生错误!</h1>
      <p className="mt-4">处理您的请求时发生错误。</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        重试
      </button>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-4 text-blue-500 hover:text-blue-700"
      >
        返回首页
      </button>
    </div>
  )
} 