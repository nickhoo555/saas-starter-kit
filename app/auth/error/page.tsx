'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams?.get('error') || ''

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            认证错误
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error === 'AccessDenied'
              ? '您没有权限登录。'
              : '认证过程中发生错误。'}
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/auth/signin"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            重新尝试登录
          </Link>
        </div>
      </div>
    </div>
  )
} 