export interface Activity {
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
}
export declare function getActivities(): Activity[];
export declare function updateActivities(activities: Activity[]): void;
export declare function addActivity(activity: Omit<Activity, 'id' | 'timestamp'>): Activity;
export declare function removeActivity(id: string): void;
export declare function fetchActivities(): Promise<Activity[]>;
declare global {
    interface Window {
        activitiesList: Activity[];
    }
}
