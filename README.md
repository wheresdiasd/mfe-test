# Zephyr Cloud Examples

This repository contains projects demonstrating how to deploy applications to Zephyr Cloud.
A selection of bundlers, frameworks, and patterns are used.

Each example project comes with Zephyr Cloud enabled.
Once you've forked this repository, you can clone it and follow the instructions to [build and deploy](#deploying-an-example-project) to your Zephyr Cloud account.


*   __[`react-tractor-sample`](./examples/react-tractor-sample)__  
## Deploying an example project
After cloning your fork of this repository locally, follow these steps:

1.  __Install dependencies__  
    ```shell
    pnpm i
    ```
2.  __Change directory to the example codebase__  
    For example, if you want to run the `create-default-webpack-mf` example:

    ```shell
    cd ./examples/create-default-webpack-mf
    ```
3.  __Build the project__  
    ```shell
    pnpm build
    ```

After you build the project, it will be deployed to your Zephyr Cloud account.
For more information on using Zephyr Cloud, visit the [official documentation][documentation].

[documentation]: https://docs.zephyr-cloud.io

## Contributors
![Alt](https://repobeats.axiom.co/api/embed/9d3af925eba49c0dd8ddd8ee144443242fba9b6a.svg "Repobeats analytics image")

## TODO:
- [ ] Remove `@rspack/plugin-minify` in favor of `terser-webpack-plugin`
- [x] Move to consistent build command
- [ ] Create testing matrix that can run with every canary of plugins

## Status
:white_check_mark: `angular-vite`   
:white_check_mark: `create-default-webpack-mf`  
:white_check_mark: `create-mf-app-rspack`  
:white_check_mark: `create-nx-rspack-workspace-mf`  
:white_check_mark: `create-nx-workspace-mf`  
:white_check_mark: `nx-ng`  
:x: `qwik-1.5` - rework plugin support   
:white_check_mark: `react-airbnb-clone`  
:white_check_mark: `react-rollup-ts`  
:white_check_mark: `react-rspack-tractor-2.0`  
:white_check_mark: `react-tractor-sample`  
:white_check_mark: `react-vite-mf`  
:x: `react-vite-nx` - @nx/vite plugin dependency issue  
:white_check_mark: `react-vite-ts`  
:white_check_mark: `rspack-project`  
:white_check_mark: `solid`  
:white_check_mark: `svelte`  
:white_check_mark: `turbo-rspack-mf`  
