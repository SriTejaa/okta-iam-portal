Roles
==========================================
IAM-SUPER-ADMIN
IAM-ADMIN
IAM-AUDITOR
IAM-MANAGER
IAM-USER

Permissions
==========================================
USER_VIEW
USER_CREATE
USER_UPDATE
USER_SUSPEND
USER_DEACTIVATE
USER_DELETE
USER_UNLOCK

GROUP_VIEW
GROUP_CREATE
GROUP_UPDATE
GROUP_ASSIGN
GROUP_REMOVE

APP_VIEW
APP_ASSIGN
APP_UNASSIGN

AUDIT_VIEW

ACCESS_REQUEST_CREATE
ACCESS_REQUEST_VIEW
ACCESS_REQUEST_APPROVE
ACCESS_REQUEST_REJECT

MFA_VIEW
MFA_RESET

Role Mapping
==========================================
IAM-SUPER-ADMIN:-
ALL PERMISSIONS

IAM-ADMIN:-
USER_VIEW
USER_CREATE
USER_UPDATE
USER_SUSPEND
USER_DEACTIVATE

GROUP_VIEW
GROUP_CREATE
GROUP_UPDATE
GROUP_ASSIGN

APP_VIEW
APP_ASSIGN

AUDIT_VIEW

MFA_VIEW
MFA_RESET

IAM-AUDITOR:-
USER_VIEW
GROUP_VIEW
APP_VIEW

AUDIT_VIEW

ACCESS_REQUEST_VIEW

IAM-MANAGER:-
USER_VIEW

ACCESS_REQUEST_VIEW
ACCESS_REQUEST_APPROVE
ACCESS_REQUEST_REJECT

IAM-USER:-
ACCESS_REQUEST_CREATE
ACCESS_REQUEST_VIEW

MFA_VIEW


# Role-Based Access Control (RBAC) Model

## Overview

The IAM Portal implements Role-Based Access Control (RBAC) to enforce authorization across all application modules.

Authentication is delegated to Okta, while authorization is enforced by the backend application.

Users receive permissions through roles, and roles are assigned through Okta Groups.

The system follows the Principle of Least Privilege, ensuring users receive only the minimum permissions required to perform their duties.

---

# RBAC Architecture

```text
User
  |
  v
Okta Group
  |
  v
Application Role
  |
  v
Permissions
  |
  v
Protected Resources
```

Example:

```text
John Doe
   |
   v
IAM-ADMIN Group
   |
   v
IAM_ADMIN Role
   |
   v
Manage Users
Manage Groups
Approve Access Requests
View Audit Logs
```

---

# Authorization Flow

```text
API Request
     |
     v
JWT Token
     |
     v
Extract Groups Claim
     |
     v
Map Groups To Roles
     |
     v
Permission Evaluation
     |
     +----> ALLOW
     |
     +----> DENY
```

Authorization checks occur for every API request.

The frontend never makes authorization decisions.

The backend remains the source of truth.

---

# Roles

The application contains five primary roles.

## IAM_SUPER_ADMIN

Highest privileged role.

Responsible for platform administration and governance.

Permissions:

* Manage Administrators
* Manage Users
* Manage Groups
* Manage Roles
* Manage Access Requests
* Manage MFA Policies
* View Audit Logs
* Configure System Settings
* Full Read/Write Access

Use Case:

Identity Governance Team

---

## IAM_ADMIN

Administrative role responsible for day-to-day identity management.

Permissions:

* Create Users
* Update Users
* Deactivate Users
* Reactivate Users
* Create Groups
* Update Groups
* Assign Users To Groups
* Approve Access Requests
* View Audit Logs

Restrictions:

* Cannot manage Super Admin accounts.
* Cannot modify system-wide configurations.

Use Case:

Identity Administrators

---

## IAM_MANAGER

Approver role.

Responsible for reviewing and approving access requests.

Permissions:

* View Team Users
* Review Access Requests
* Approve Requests
* Reject Requests
* View Team Audit Activity

Restrictions:

* Cannot create users.
* Cannot manage groups.
* Cannot configure MFA policies.

Use Case:

Department Managers

---

## IAM_AUDITOR

Read-only role.

Responsible for compliance and audit activities.

Permissions:

* View Users
* View Groups
* View Access Requests
* View Audit Logs
* Export Reports

Restrictions:

* No Create Permission
* No Update Permission
* No Delete Permission

Use Case:

Security Auditors
Compliance Teams

---

## IAM_USER

Standard business user.

Permissions:

* View Own Profile
* Update Own Profile
* Enroll MFA
* Submit Access Requests
* View Own Requests

Restrictions:

* No Administrative Permissions

Use Case:

Employees
Contractors
Partners

---

# Permission Matrix

| Permission                | SUPER_ADMIN | ADMIN | MANAGER | AUDITOR | USER |
| ------------------------- | ----------- | ----- | ------- | ------- | ---- |
| View Users                | Yes         | Yes   | Yes     | Yes     | No   |
| Create Users              | Yes         | Yes   | No      | No      | No   |
| Update Users              | Yes         | Yes   | No      | No      | No   |
| Delete Users              | Yes         | Yes   | No      | No      | No   |
| View Groups               | Yes         | Yes   | Yes     | Yes     | No   |
| Create Groups             | Yes         | Yes   | No      | No      | No   |
| Update Groups             | Yes         | Yes   | No      | No      | No   |
| Delete Groups             | Yes         | Yes   | No      | No      | No   |
| Submit Access Request     | Yes         | Yes   | Yes     | Yes     | Yes  |
| Approve Access Request    | Yes         | Yes   | Yes     | No      | No   |
| View Audit Logs           | Yes         | Yes   | Limited | Yes     | No   |
| Export Reports            | Yes         | Yes   | No      | Yes     | No   |
| Manage MFA Policies       | Yes         | No    | No      | No      | No   |
| Configure System Settings | Yes         | No    | No      | No      | No   |

---

# Okta Group Mapping

The application maps Okta Groups directly to application roles.

| Okta Group      | Application Role |
| --------------- | ---------------- |
| IAM-SUPER-ADMIN | IAM_SUPER_ADMIN  |
| IAM-ADMIN       | IAM_ADMIN        |
| IAM-MANAGER     | IAM_MANAGER      |
| IAM-AUDITOR     | IAM_AUDITOR      |
| IAM-USER        | IAM_USER         |

During authentication, group information is included in the JWT token.

Example:

```json
{
  "sub": "00u123456",
  "email": "john.doe@example.com",
  "groups": [
    "IAM-ADMIN"
  ]
}
```

The backend extracts the groups claim and resolves the corresponding application role.

---

# Backend Authorization Strategy

Authorization is enforced at the API layer.

Example:

```javascript
authorize(['IAM_ADMIN', 'IAM_SUPER_ADMIN'])
```

Before executing business logic:

1. JWT is validated.
2. User groups are extracted.
3. Role is determined.
4. Permission is evaluated.
5. Request is allowed or denied.

---

# Security Principles

## Principle of Least Privilege

Users receive only the permissions necessary for their responsibilities.

---

## Separation of Duties

Administrative, approval, and audit responsibilities are separated.

Examples:

* Auditors cannot modify data.
* Managers cannot create users.
* Users cannot approve their own requests.

---

## Centralized Authorization

Authorization decisions are made only by the backend.

Frontend role checks are used solely for UI visibility.

Security decisions never rely on frontend logic.

---

## Auditability

All privileged actions are logged.

Examples:

* User Creation
* User Deactivation
* Group Assignment
* Access Approval
* MFA Changes

Each audit entry records:

* User
* Action
* Timestamp
* Resource
* Outcome

---

# Future Enhancements

The RBAC model can evolve to support:

* Fine-Grained Permissions
* Attribute-Based Access Control (ABAC)
* Dynamic Policy Evaluation
* Delegated Administration
* Just-In-Time Access
* Privileged Access Management (PAM)

---

# Summary

The IAM Portal uses an enterprise-grade RBAC model where Okta Groups map to application roles. Authorization is enforced on every backend request, ensuring secure access control, separation of duties, auditability, and compliance with IAM best practices.

Architecture Decisions
==========================================

1. Roles are implemented as Okta Groups.

2. Users may belong to multiple roles/groups.

3. Permissions are statically mapped in backend code.

4. Authorization is enforced by Node.js middleware.

5. JWT tokens are validated locally by backend.

6. Frontend never calls Okta Management APIs directly.

7. All requests must be authorized before business logic execution.

8. Effective permissions are the union of permissions from all assigned roles.
