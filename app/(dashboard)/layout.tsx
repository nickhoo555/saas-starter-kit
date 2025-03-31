import React from 'react';
import AppShell from '@/components/shared/shell/AppShell';
import { SWRConfig } from 'swr';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <AppShell>{children}</AppShell>
    </SWRConfig>
  );
} 