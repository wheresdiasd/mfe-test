# Valor MFE Zephyr Project

## 🚨 IMPORTANT WORKSPACE SETUP DISCLAIMER 🚨

**BUILD/SERVE COMMANDS MUST BE RUN FROM THE `apps/` (WORSKPACE) DIRECTORY**
- Change directory to `apps/` before executing any commands
- Failure to do so will result in command failures or unexpected behavior

```bash
# CORRECT: Navigate to apps directory first
cd apps/

# Then run commands
pnpm i
npx nx run module_storefront:serve
```

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
3. **module_activities**: Activities management

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

### Detailed Build Configurations
From `apps/package.json` build scripts:
```json
"scripts": {
  "build": "nx run-many -t build --parallel=1 --skip-nx-cache -p module_activities module_storefront module_app --verbose",
  "build:module-app": "nx run module_app:build:production --skip-nx-cache",
  "build:module-activities": "nx run module_activities:build:production --skip-nx-cache",
  "build:module-storefront": "nx run module_storefront:build:production --skip-nx-cache --watch"
}
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