import { Activity, addActivity, removeActivity } from './module-activities-store';
export declare function useActivities(): {
    activities: Activity[];
    loading: boolean;
    addActivity: typeof addActivity;
    removeActivity: typeof removeActivity;
    refresh: () => Promise<void>;
};
export default useActivities;
export type { Activity };
