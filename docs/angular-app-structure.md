## Angular Directory Structure

Angular projects follow a standardized directory structure that promotes organization and maintainability. Here's an overview of the key directories and files:

### Core Directories

- `src/`: Contains the main source code for the application
  - `app/`: Houses the root component and module
  - `assets/`: Stores static files like images and fonts
  - `environments/`: Holds environment-specific configuration files

### Important Files

- `angular.json`: Angular workspace configuration
- `package.json`: NPM package dependencies and scripts
- `tsconfig.json`: TypeScript compiler configuration

### App Directory Structure

Within the `src/app/` directory, you'll typically find:

- Components: Organized in their own folders
- Services: Shared across components
- Models: Data structures and interfaces
- Modules: Feature modules for better organization

### Best Practices

- Group related features into modules
- Use a shared module for common components and services
- Implement lazy loading for better performance
