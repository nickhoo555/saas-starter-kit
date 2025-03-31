'use client'

import * as Sentry from '@sentry/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function GlobalError({
  error,
  reset,
}) {
  // 向 Sentry 报告错误
  Sentry.captureException(error)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">出现严重错误</h1>
          <p className="mt-4">很抱歉，系统出现了错误。</p>
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
      </body>
    </html>
  )
} 