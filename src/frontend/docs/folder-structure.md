# 📁 Folder Structure

This document outlines the directory structure and purpose of each folder/file in the project. The project is organized for modularity, scalability, and maintainability.

---

## `/app`

The core application directory, powered by Next.js App Router.

* `layout.tsx`: The root layout, defines the base HTML shell.
* `globals.css`: Global styles applied to the app.
* `/auth`: Public routes for user authentication.

  * `signin/page.tsx`: Sign-in UI page.
  * `signup/page.tsx`: Sign-up UI page.
* `/dashboard`: Protected routes for authenticated users.

  * `layout.tsx`: Layout guarded by authentication.
  * `page.tsx`: Dashboard main page.
* `/admin`: Admin-only views.

  * `layout.tsx`: Admin layout with additional access control.
  * `users/page.tsx`: User management interface for admins.
* `/api`: API route handlers.

  * `/auth/[...nextauth]/route.ts`: NextAuth configuration and handler.
  * `/users/route.ts`: Custom API route for user operations.

---

## `/domain`

Feature-based module structure for domain logic and services.

### `/auth`

* `components/`: Reusable auth-related UI components (e.g., `AuthForm`).
* `services/`: Business logic functions (e.g., `loginUser`).
* `actions.ts`: Server actions like password reset.
* `schemas.ts`: Zod or Yup validation schemas.
* `types.ts`: TypeScript types used in the auth module.
* `constants.ts`: Constant values related to authentication.

### `/user`

* `components/`: UI components like `ProfileCard`, `UserList`.
* `services/`: Core logic like fetching/updating users.
* `actions.ts`, `schemas.ts`, `types.ts`: Defined similarly to the `auth` module.

### `/product`

* Future product-related features go here.

---

## `/config`

Configuration and environment handling.

* `site.ts`: Metadata like app name, description, favicon.
* `auth.ts`: Auth-related constants and JWT options.
* `env.ts`: Zod-validated environment variable loader.

---

## `/hooks`

Reusable React hooks.

* `useAuth.ts`: Wrapper for authentication/session logic.
* `useDebounce.ts`: Debounce logic for async inputs.
* `useClickOutside.ts`: Hook to detect clicks outside an element.

---

## `/lib`

Application-level utility functions.

* `auth.ts`: Session handling, role checking helpers.
* `db.ts`: Prisma or MongoDB database client instance.
* `logger.ts`: Custom logging (Winston or Pino).
* `utils.ts`: General-purpose utility functions.

---

## `/components`

Global, reusable UI components.

* `ui/`: Design system components (e.g., buttons, inputs).
* `Navbar.tsx`: App-wide top navigation bar.
* `Sidebar.tsx`: App-wide sidebar.

---

## `/types`

Global TypeScript type definitions used across the app.

---

## `/prisma`

Prisma setup for database schema and seeding.

* `schema.prisma`: Database model definitions.
* `seed.ts`: Data seeding script.

---

## `/styles`

Global and theme-related styles.

* `globals.css`: Base global styles.
* `tailwind.css`: Tailwind import and configuration.
* `theme.ts`: Optional theme token definitions.

---

## Root-Level Files

* `.env`: Environment variable definitions.
* `eslint.config.mjs`, `.eslintrc.json`: ESLint configuration.
* `next.config.ts`: Next.js configuration.
* `tsconfig.json`: TypeScript compiler configuration.
* `package.json`, `package-lock.json`: Node dependencies.
* `postcss.config.js`: PostCSS configuration.
* `prettier.config.js`: Prettier formatting rules.
* `next-env.d.ts`: Next.js TypeScript types.
* `.gitignore`: Git ignore patterns.

---

## `/public`

Static assets like images, fonts, and icons.

---

## Other

* `app-structure.txt`: Optional reference text or backup.



/app
│
├── layout.tsx                   # Root layout (HTML shell)
├── globals.css
│
├── /auth                        # UI views (sign in, sign up, etc.)
│   └── signin/page.tsx
│   └── signup/page.tsx
│
├── /dashboard                   # Protected routes
│   └── layout.tsx               # Session-guarded layout
│   └── page.tsx
│
├── /admin                       # Admin-only views
│   └── layout.tsx
│   └── users/page.tsx
│
├── /api
│   └── /auth/[...nextauth]/route.ts # NextAuth config
│   └── /users/route.ts          # Optional: custom API routes
/domain                          # 💡 App “features” or “modules”
│
├── /auth
│   ├── components/              # Reusable UI for auth (e.g., AuthForm)
│   ├── services/                # Business logic (e.g., loginUser)
│   ├── actions.ts               # Server actions (e.g., resetPassword)
│   ├── schemas.ts               # Validation schemas (Zod/Yup)
│   ├── types.ts
│   └── constants.ts
│
├── /user
│   ├── components/              # ProfileCard, UserList, etc.
│   ├── services/                # getUserById, updateUserRole, etc.
│   ├── actions.ts
│   ├── schemas.ts
│   └── types.ts
│
├── /product                     # Another module
│   ├── ...
│
/config
|
│  ├── site.ts           # App name, description, favicon info
│  ├── auth.ts           # JWT config, auth constants
│  └── env.ts            # Zod-validated env loader (e.g., from process.env)
/hooks
|
│  ├── useAuth.ts        # Wrapper around session
│  ├── useDebounce.ts
│  └── useClickOutside.ts
/lib
│
├── auth.ts                      # getServerSession, hasRole, etc.
├── db.ts                        # Prisma/MongoDB client
├── logger.ts                    # Winston/pino logger
├── utils.ts                     # Generic utilities
│
/components                     # Global reusable UI (buttons, layout)
│   ├── ui/
│   ├── Navbar.tsx
│   └── Sidebar.tsx
│
/types                          # Global types (shared app-wide)
│   └── index.ts
│
/prisma                         # Prisma setup
│   ├── schema.prisma
│   └── seed.ts
│
/styles
│  ├── globals.css
│  ├── tailwind.css
│  ├── theme.ts          # Export theme vars if needed


/public
.env
.eslintrc.json
.gitignore
app-structure.txt
eslint.config.mjs
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.js
prettier.config.js
tsconfig.json