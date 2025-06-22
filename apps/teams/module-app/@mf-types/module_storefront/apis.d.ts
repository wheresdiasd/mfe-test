
    export type RemoteKeys = 'module_storefront/StorefrontRecos';
    type PackageType<T> = T extends 'module_storefront/StorefrontRecos' ? typeof import('module_storefront/StorefrontRecos') :any;