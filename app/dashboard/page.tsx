"use client";

import { Loading } from '@/components/shared';
import useTeams from 'hooks/useTeams';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import type { NextPageWithLayout } from 'types';

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();
  const { teams, isLoading } = useTeams();

  useEffect(() => {
    if (isLoading || !teams) {
      return;
    }

    if (teams.length > 0) {
      router.push(`/teams/${teams[0].slug}/settings`);
    } else {
      router.push('teams?newTeam=true');
    }
  }, [isLoading, router, teams]);

  return <Loading />;
};

export default Dashboard;
