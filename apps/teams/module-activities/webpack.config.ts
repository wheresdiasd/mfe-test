import { withReact } from "@nx/react";
import { withModuleFederation } from "@nx/module-federation/webpack";
import { ModuleFederationConfig } from "@nx/module-federation";
import { composePlugins, withNx } from "@nx/webpack";
import { withZephyr } from "zephyr-webpack-plugin";

const mfConfig: ModuleFederationConfig = {
  name: "module_activities",
  exposes: {
    "./ActivitiesList": "./src/app/module-activities-list.tsx",
    "./BlueBuy": "./src/app/team-blue-buy.tsx",
  },
  additionalShared: [
    ["react", { singleton: true }],
    ["react-dom", { singleton: true }],
    ["@tanstack/react-query", { singleton: true }],
    ["rxjs", { singleton: true }],
  ],
};

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(mfConfig),
  withZephyr(),
  (config) => {
    return config;
  },
);
