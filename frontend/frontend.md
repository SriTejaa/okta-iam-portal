src
│
├── app
│   ├── App.jsx
│   ├── router.jsx
│   └── providers.jsx
│
├── layouts
│   ├── MainLayout
│   ├── AuthLayout
│   └── DashboardLayout
│
├── routes
│   ├── ProtectedRoute.jsx
│   ├── PublicRoute.jsx
│   └── RouteConfig.jsx
│
├── pages
│   ├── Login
│   ├── Dashboard
│   ├── NotFound
│   └── Unauthorized
│
├── features
│
│   ├── users
│   │   ├── pages
│   │   ├── components
│   │   ├── services
│   │   └── hooks
│
│   ├── groups
│   │   ├── pages
│   │   ├── components
│   │   ├── services
│   │   └── hooks
│
│   ├── access-requests
│   │   ├── pages
│   │   ├── components
│   │   └── services
│
│   ├── mfa
│   │   ├── pages
│   │   ├── services
│   │   └── components
│
│   └── audit
│       ├── pages
│       ├── services
│       └── components
│
├── services
│   ├── api.js
│   ├── authService.js
│   └── oktaService.js
│
├── hooks
│   ├── useAuth.js
│   ├── usePermissions.js
│   └── useApi.js
│
├── context
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── components
│   ├── common
│   ├── tables
│   ├── forms
│   ├── modals
│   ├── cards
│   └── charts
│
├── assets
├── styles
├── utils
└── types