
    export type RemoteKeys = 'module_activities/BlueBasket' | 'module_activities/BlueBuy';
    type PackageType<T> = T extends 'module_activities/BlueBuy' ? typeof import('module_activities/BlueBuy') :T extends 'module_activities/BlueBasket' ? typeof import('module_activities/BlueBasket') :any;