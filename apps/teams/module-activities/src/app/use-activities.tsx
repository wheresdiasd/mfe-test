import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Activity,
  fetchActivities,
  ACTIVITIES_QUERY_KEY,
} from "./module-activities-store";

export function useActivities() {
  const queryClient = useQueryClient();

  const {
    data: activities = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [ACTIVITIES_QUERY_KEY],
    queryFn: fetchActivities,
  });

  const addActivity = useMutation({
    mutationFn: async (activity: Omit<Activity, "id" | "timestamp">) => {
      const newActivity: Activity = {
        ...activity,
        id: `act-${Date.now()}`,
        timestamp: new Date().toISOString(),
      };

      const currentActivities =
        queryClient.getQueryData<Activity[]>([ACTIVITIES_QUERY_KEY]) || [];
      queryClient.setQueryData(
        [ACTIVITIES_QUERY_KEY],
        [newActivity, ...currentActivities],
      );

      return Promise.resolve(newActivity);
    },
  });

  const removeActivity = useMutation({
    mutationFn: async (id: string) => {
      const currentActivities =
        queryClient.getQueryData<Activity[]>([ACTIVITIES_QUERY_KEY]) || [];
      queryClient.setQueryData(
        [ACTIVITIES_QUERY_KEY],
        currentActivities.filter((activity) => activity.id !== id),
      );

      return Promise.resolve(id);
    },
  });

  return {
    activities,
    loading: isLoading || isFetching,
    count: activities.length,
    addActivity: (activity: Omit<Activity, "id" | "timestamp">) =>
      addActivity.mutate(activity),
    removeActivity: (id: string) => removeActivity.mutate(id),
    refresh: () =>
      queryClient.invalidateQueries({ queryKey: [ACTIVITIES_QUERY_KEY] }),
  };
}

export default useActivities;
export type { Activity };
