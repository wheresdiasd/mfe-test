// In apps/teams/module-activities/src/app/use-activities.tsx

import { useQuery } from "@tanstack/react-query";
import { from, Observable, shareReplay } from "rxjs";
import { useEffect, useMemo } from "react";

export interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
}

const fetchActivitiesMock = async (): Promise<Activity[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const mockActivities: Activity[] = Array.from({ length: 10 }, (_, i) => ({
    id: `act-${i + 1}`,
    type: ["login", "purchase", "view", "share"][Math.floor(Math.random() * 4)],
    title: `Activity ${i + 1}`,
    description: `This is a mock activity description for activity ${i + 1}`,
    timestamp: new Date(
      Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  }));

  mockActivities.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );

  return mockActivities;
};

export function useActivities() {
  const { data, isLoading, error, refetch } = useQuery<Activity[]>({
    queryKey: ["activities"],
    queryFn: fetchActivitiesMock,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const activities$: Observable<Activity[]> = useMemo(() => {
    return from(Promise.resolve(data || [])).pipe(shareReplay(1));
  }, [data]);

  useEffect(() => {
    const subscription = activities$.subscribe((activities) => {
      console.log("Activities updated:", activities);
    });
    return () => subscription.unsubscribe();
  }, [activities$]);

  return {
    activities: data || [],
    isLoading,
    error,
    refresh: refetch,
    activities$,
  };
}

export default useActivities;
