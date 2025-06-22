
    export type RemoteKeys = 'module_activities/ActivitiesList' | 'module_activities/ActivityCountBadge';
    type PackageType<T> = T extends 'module_activities/ActivityCountBadge' ? typeof import('module_activities/ActivityCountBadge') :T extends 'module_activities/ActivitiesList' ? typeof import('module_activities/ActivitiesList') :any;