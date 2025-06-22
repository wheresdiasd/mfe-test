
    export type RemoteKeys = 'module_storefront/StorefrontHeader';
    type PackageType<T> = T extends 'module_storefront/StorefrontHeader' ? typeof import('module_storefront/StorefrontHeader') :any;