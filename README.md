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