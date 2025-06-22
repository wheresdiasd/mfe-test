export interface Activity {
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
}
export declare const ACTIVITIES_QUERY_KEY = "activities";
export declare function fetchActivities(): Promise<Activity[]>;
