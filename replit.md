# Data Science Portfolio Application

## Overview

This is a modern full-stack web application serving as a personal portfolio for Niyanthri R Sridhar, a 4th year Data Science student at RV University. The application features a responsive, single-page design showcasing projects, skills, experience, and contact information with smooth scrolling navigation and interactive components.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA with TypeScript, using Vite for build tooling
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM (schema defined but minimal usage currently)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend, esbuild for backend bundling

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state, React hooks for local state
- **UI Components**: shadcn/ui (Radix UI primitives) with custom styling
- **Styling**: Tailwind CSS with CSS variables for theming
- **Icons**: Lucide React and React Icons libraries

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database Access**: Drizzle ORM with PostgreSQL adapter
- **Session Management**: Basic setup with connect-pg-simple (currently unused)
- **Development**: Hot reloading with Vite integration in development mode

### Component Structure
The frontend is organized into modular sections:
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero**: Landing section with call-to-action buttons
- **About**: Personal information and education details
- **Projects**: Filterable project showcase with technology tags
- **Skills**: Technical skills with progress indicators and tool icons
- **Experience**: Timeline of work and education experience
- **Contact**: Contact form with social media links
- **Footer**: Site navigation and additional links

## Data Flow

### Frontend Data Flow
1. User interactions trigger React state updates
2. Form submissions use React Hook Form with Zod validation
3. Toast notifications provide user feedback
4. Smooth scrolling library handles navigation between sections
5. TanStack Query prepared for future API integration

### Backend Data Flow
1. Express middleware handles request logging and JSON parsing
2. Routes are modularized but currently minimal (placeholder structure)
3. Storage abstraction layer ready for database operations
4. Error handling middleware catches and formats errors

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem (React, React DOM)
- **Routing**: wouter for lightweight routing
- **Forms**: React Hook Form with Hookform resolvers
- **Validation**: Zod for schema validation
- **Database**: Drizzle ORM with Neon serverless PostgreSQL
- **Styling**: Tailwind CSS, Radix UI components, class-variance-authority
- **Icons**: Lucide React, React Icons, various icon libraries
- **Utilities**: date-fns, clsx, cmdk for command palette

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Replit Integration**: Cartographer plugin, runtime error overlay
- **Database Tools**: Drizzle Kit for migrations

## Deployment Strategy

The application is configured for both development and production environments:

### Development
- Vite dev server with HMR for frontend
- tsx for TypeScript execution of backend
- Integrated development experience with Replit-specific tooling

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Static assets served by Express in production
4. Environment-specific configuration via NODE_ENV

### Database Management
- Drizzle migrations stored in `./migrations`
- Schema defined in `shared/schema.ts`
- Connection via DATABASE_URL environment variable
- Push command available for schema updates

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```