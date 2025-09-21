# WAVE Authentication Setup with Clerk

## Clerk Configuration

This project uses Clerk for authentication. To set it up:

### 1. Create a Clerk Account
1. Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Sign up for a free account
3. Create a new application

### 2. Get Your Publishable Key
1. In your Clerk Dashboard, go to **Configure** → **API Keys**
2. Copy your **Publishable Key**
3. Open the `.env` file in the project root
4. Replace `your_clerk_publishable_key_here` with your actual publishable key

### 3. Environment Setup
Your `.env` file should look like this:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

### 4. Features Included

#### Authentication Components
- **Login Component**: Modal with Clerk SignIn integration
- **Registration Component**: Modal with Clerk SignUp integration  
- **AuthModal**: Wrapper that handles switching between login/registration

#### Navigation Integration
- Sign In button in the navigation bar
- Modal opens when clicked
- Switch between login and registration modes

#### Styling
- Custom SCSS styling that matches the WAVE blue theme
- Responsive design for all device sizes
- Glassmorphism effects and smooth animations

### 5. Usage

Users can:
1. Click the "Sign In" button in the navigation
2. Choose to login or register
3. Use email/password or social login (configurable in Clerk Dashboard)
4. Switch between login and registration modes

### 6. Customization

You can customize the authentication experience in your Clerk Dashboard:
- Enable/disable social logins (Google, GitHub, etc.)
- Configure password requirements
- Set up email verification
- Customize email templates

## Development

The authentication system is fully integrated and ready to use. The components are located in:
- `src/components/auth/` - React components
- `src/styles/auth/` - SCSS styling files

All components follow the existing project's design system and color scheme.