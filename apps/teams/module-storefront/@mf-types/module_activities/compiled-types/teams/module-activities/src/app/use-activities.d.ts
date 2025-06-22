import { Activity } from "./module-activities-store";
export declare function useActivities(): {
    activities: Activity[];
    loading: boolean;
    count: number;
    addActivity: (activity: Omit<Activity, "id" | "timestamp">) => void;
    removeActivity: (id: string) => void;
    refresh: () => Promise<void>;
};
export default useActivities;
export type { Activity };
