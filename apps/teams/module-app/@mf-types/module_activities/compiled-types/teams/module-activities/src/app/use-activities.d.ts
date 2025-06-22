import { Observable } from "rxjs";
export interface Activity {
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
}
export declare function useActivities(): {
    activities: Activity[];
    isLoading: boolean;
    error: Error | null;
    refresh: (options?: import("@tanstack/react-query").RefetchOptions) => Promise<import("@tanstack/react-query").QueryObserverResult<Activity[], Error>>;
    activities$: Observable<Activity[]>;
};
export default useActivities;
