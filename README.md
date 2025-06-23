# Valor MFE Zephyr Project

Links:

https://diego-dias-852-module-app-mfe-test-wheresdiasd-d029e4ba4-ze.zephyrcloud.app/  ( Application link ) 
https://diego-dias-850-module-storefront-mfe-test-wheresd-72ccd66c6-ze.zephyrcloud.app/  ( Header link )
https://diego-dias-851-module-activities-mfe-test-wheresd-acf782368-ze.zephyrcloud.app/ ( Activities link )


## 🚨 IMPORTANT WORKSPACE SETUP DISCLAIMER 🚨

**ALL COMMANDS MUST BE RUN FROM THE `apps/` DIRECTORY**
- Change directory to `apps/` before executing any commands
- Failure to do so will result in command failures or unexpected behavior

```bash
# CORRECT: Navigate to apps directory first
cd apps/

# Then run commands
pnpm i
npx nx run module_storefront:serve
```

## Project Overview

### 🔍 Activities Module Note
**IMPORTANT**: The activities module uses **MOCKED DATA ONLY**
- All activities are simulated for demonstration purposes
- No real backend or persistent storage is implemented
- Activities are generated dynamically during runtime
- Primarily used to showcase Module Federation and React Query integration

## Workspace Architecture

### Folder Structure Overview
```
valor-mfe-zephyr/
│
├── apps/                   # Root workspace directory
│   ├── package.json        # Workspace-level package management
│   ├── tsconfig.json       # Typescript configuration for the entire workspace
│   │
│   └── teams/              # Individual module directories
│       ├── module-app/     # Main application module
│       ├── module-storefront/ # Storefront functionality module
│       └── module-activities/ # Activities management module
│
├── pnpm-workspace.yaml     # pnpm workspace configuration
└── package.json            # Root package definition
```

### Workspace Management
This project uses a modern monorepo approach with:
- **Nx**: Provides intelligent, extensible workspace management
- **pnpm**: Efficient package management with workspace support

#### Key Workspace Characteristics
- Centralized dependency management
- Shared configuration across modules
- Simplified build and deployment processes
- Modular architecture enabling independent development

## Project Modules

### Federated Modules
1. **module_app**: Central application shell
2. **module_storefront**: Storefront-specific functionality
3. **module_activities**: Mocked activities management module

## Development Workflow

### Installation
```bash
# IMPORTANT: Ensure you are in the apps/ directory
cd apps/

# Install dependencies
pnpm i
```

### Running Modules

#### Development Servers
```bash
# IMPORTANT: Run from apps/ directory
# Storefront Module (Port 4400)
npx nx run module_storefront:serve

# Activities Module (Port 4300)
npx nx run module_activities:serve

# Main App Module (Port 4500)
npx nx run module_app:serve
```

### Building Modules

#### Build Commands
```bash
# IMPORTANT: Run from apps/ directory
# Build all specified modules
pnpm build

# Build individual modules
pnpm build:module-app
pnpm build:module-activities
pnpm build:module-storefront
```

## Technologies Used
- React 18
- Tailwind CSS
- React Query
- Module Federation
- Nx Workspace
- Zephyr Cloud
- pnpm

## Troubleshooting
- If commands fail, verify you are in the `apps/` directory
- Ensure all dependencies are installed with `pnpm i`
- Check Nx and pnpm are correctly installed globally