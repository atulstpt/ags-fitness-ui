# AGS Fitness UI

AGS Fitness UI is a multitenant React application for managing fitness tenants. Built with Vite, React, and TypeScript.

## Features
- Multitenancy: Supports multiple tenants with custom branding and API endpoints
- React Router for navigation
- Context API for tenant state management
- TypeScript for type safety
- Vite for fast development and builds

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```sh
npm install
```

### Running Locally
```sh
npm run dev
```
App will start at [http://localhost:5173](http://localhost:5173)

### Building for Production
```sh
npm run build
```

### Running Tests
```sh
npm test
```

## Project Structure

- `src/` - Source code
	- `App.tsx` - Main app component
	- `pages/` - Page components (`Home`, `TenantDashboard`)
	- `context/TenantContext.tsx` - Tenant context provider and hook
	- `tenants.ts` - Tenant configuration

## Multitenancy

Tenants are defined in `src/tenants.ts` with unique IDs, names, colors, and API endpoints. The app reads the tenant ID from the URL path (e.g., `/tenant-a`) or from the query string (`?tenant=tenant-a`).

## License
MIT