# Authentication System

This Next.js application implements a complete authentication flow with login, dashboard, and logout functionality.

## Features

- **Login Page** (`/login`) - User authentication interface
- **Dashboard Page** (`/dashboard`) - Protected dashboard with user information
- **Logout Functionality** - Available from dashboard and `/logout` route
- **Protected Routes** - Dashboard automatically redirects unauthenticated users to login
- **Auto-redirect** - Root path (`/`) redirects to dashboard if logged in, otherwise to login
- **Dark Mode Support** - All screens support light and dark themes

## Pages

### Login (`/login`)
- Email and password input fields
- Form validation (email required, password min 6 characters)
- Error messaging
- Demo credentials: Any email + password with 6+ characters

### Dashboard (`/dashboard`)
- Protected route - requires authentication
- Displays user information
- Shows statistics cards
- Recent activity feed
- Quick actions
- Logout button in navigation

### Logout (`/logout`)
- Dedicated logout page with redirect
- Clears authentication state
- Redirects to login after 1 second

## Technical Implementation

### Authentication Context (`contexts/AuthContext.tsx`)
- React Context API for global auth state
- localStorage for session persistence
- Methods: `login()`, `logout()`, `useAuth()` hook
- User interface with id, email, and name

### User Flow
1. User visits `/` → redirected to `/login` (if not authenticated)
2. User logs in → redirected to `/dashboard`
3. User clicks logout → redirected to `/login`
4. Protected routes check auth state and redirect if needed

### Styling
- Tailwind CSS 4 for all styling
- Consistent light/dark theme support
- Responsive design
- Geist Sans font family

## Demo Usage

1. Navigate to the application
2. You'll be redirected to `/login`
3. Enter any email and a password (min 6 characters)
4. Click "Sign in" to access the dashboard
5. Use the "Logout" button to sign out

## Notes

This is a demo implementation using localStorage for state persistence. In a production application, you would:
- Implement actual API authentication
- Use secure session management (JWT, cookies)
- Add proper password hashing
- Implement refresh tokens
- Add rate limiting and security measures
