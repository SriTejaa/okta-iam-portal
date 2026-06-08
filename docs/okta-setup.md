IAM-Portal


Admin Console Access: https://integrator-9643035-admin.okta.com/admin/home
Okta Domain: https://integrator-9643035-admin.okta.com/admin/home
Company Name: tecnics-integrator-9643035
Client ID: 
Client Secret
API Token
Authorization Server ID

Authorization Server:
    IAM-PORTAL-AS

OIDC Scopes:
    openid
    profile
    email

Custom Scopes:
    Not Required (V1)

Authorization:
    RBAC via Okta Groups

Okta Org
│
├── Applications
│     ├── IAM Portal SPA
│     └── IAM Portal API
│
├── Authorization Server
│     └── IAM-Auth-Server
│
├── Groups
│     ├── IAM_ADMIN
│     ├── IAM_MANAGER
│     ├── IAM_ANALYST
│     ├── IAM_AUDITOR
│     └── EMPLOYEE
│
├── Policies
│     ├── MFA Policy
│     └── Password Policy
│
└── Users

+------------------------------------------------------+
|                   React Frontend                     |
|------------------------------------------------------|
| Dashboard                                            |
| User Management                                      |
| Group Management                                     |
| Role Management                                      |
| Access Requests (Future)                             |
| MFA Management (Future)                              |
| Audit Logs (Future)                                  |
+-------------------------+----------------------------+
                          |
                          |
                          v
+------------------------------------------------------+
|                Node.js / Express API                 |
|------------------------------------------------------|
| Auth Module                                          |
| User Module                                          |
| Group Module                                         |
| Role Module                                          |
| Access Request Module                                |
| Audit Module                                         |
| Okta Integration Service                             |
+-------------------------+----------------------------+
                          |
          +---------------+----------------+
          |                                |
          v                                v

+----------------------+      +-------------------------+
|      PostgreSQL      |      |          Okta           |
|----------------------|      |-------------------------|
| Local Roles          |      | Users                   |
| Access Requests      |      | Groups                  |
| Audit Metadata       |      | MFA                     |
| App Configuration    |      | Lifecycle Management    |
+----------------------+      | System Logs            |
                              +-------------------------+

Authentication:
    Okta

Roles:
    Okta Groups

Permissions:
    Static Code Mapping

JWT Validation:
    Node.js Middleware

Business Data:
    PostgreSQL



check list:
Project Foundation
 Project Vision
 Tech Stack Selection
 Okta Developer Org Setup
 VS Code Setup
 Workspace Setup
 High-Level Architecture
 Authentication Strategy
 RBAC Strategy
 JWT Validation Strategy
Still Pending
 GitHub Repository
 Role Matrix
 Permission Matrix
 Okta Group Design
 Okta Application Design
 API Flow Design
 Database ERD
 Frontend Architecture
 Backend Architecture

Postman okta API collection:
https://www.postman.com/okta-eng/okta-public-api-collections/overview?sideView=agentMode