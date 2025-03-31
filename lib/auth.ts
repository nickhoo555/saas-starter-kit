import { compare, hash } from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

import env from './env';
import type { AUTH_PROVIDER } from 'types';

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

function getAuthProviders() {
  return env.authProviders?.split(',') || [];
}

export function isAuthProviderEnabled(provider: AUTH_PROVIDER) {
  return getAuthProviders().includes(provider);
}

export function authProviderEnabled() {
  return {
    github: isAuthProviderEnabled('github'),
    google: isAuthProviderEnabled('google'),
    email: isAuthProviderEnabled('email'),
    saml: isAuthProviderEnabled('saml'),
    credentials: isAuthProviderEnabled('credentials'),
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    ...(isAuthProviderEnabled('github') ? [
      GithubProvider({
        clientId: env.github.clientId,
        clientSecret: env.github.clientSecret,
      }),
    ] : []),
    ...(isAuthProviderEnabled('google') ? [
      GoogleProvider({
        clientId: env.google.clientId,
        clientSecret: env.google.clientSecret,
      }),
    ] : []),
    ...(isAuthProviderEnabled('credentials') ? [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "邮箱", type: "email" },
          password: { label: "密码", type: "password" }
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          // 这里需根据您的数据库实现用户验证逻辑
          // 以下为示例代码
          /*
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          if (!user || !user.password) {
            return null;
          }

          const isValid = await verifyPassword(credentials.password, user.password);

          if (!isValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
          */
          
          // 临时返回模拟用户，实际项目中需替换为上面的数据库查询代码
          return {
            id: '1',
            email: credentials.email,
            name: '测试用户',
          };
        }
      }),
    ] : []),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub || '1';
      }
      return session;
    },
  },
};
