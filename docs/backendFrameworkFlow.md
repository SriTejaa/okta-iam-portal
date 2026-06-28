Request
  ↓
Request Logger
  ↓
JWT Validation
  ↓
Role Resolution
  ↓
Permission Resolution
  ↓
Authorization
  ↓
Controller
  ↓
Service
  ↓
Okta API



// Request Flow
                (Route)
                Request
                   │
             Authentication
                   │
              Authorization
                   │
                Controller
                   │
                 Service
                   │
           ┌───────┴────────┐
           │                │
      Integration      PostgreSQL
       (Okta APIs)      (Later)
           │
         Okta


// USERS API CONTRACT

users.routes.js
        ↓
users.controller.js
        ↓
users.service.js
        ↓
users.client.js
        ↓
      Okta