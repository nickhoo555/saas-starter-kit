import * as Sentry from '@sentry/nextjs'

export function register() {
  // 初始化 Sentry 错误处理
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: process.env.NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE ? 
        parseFloat(process.env.NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE) : 0.0,
      environment: process.env.SENTRY_ENVIRONMENT || 'development',
      release: process.env.SENTRY_RELEASE,
    })
  }
} 