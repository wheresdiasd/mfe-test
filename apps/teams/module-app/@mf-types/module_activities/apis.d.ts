
    export type RemoteKeys = 'module_activities/ActivitiesList' | 'module_activities/BlueBuy';
    type PackageType<T> = T extends 'module_activities/BlueBuy' ? typeof import('module_activities/BlueBuy') :T extends 'module_activities/ActivitiesList' ? typeof import('module_activities/ActivitiesList') :any;