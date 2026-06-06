# API Flow Documentation

## Overview

The IAM Portal follows a secure API-driven architecture where authentication is delegated to Okta and authorization is enforced by the backend application.

All API requests pass through multiple security layers including:

1. Authentication (Okta OIDC)
2. JWT Validation
3. Authorization (RBAC)
4. Business Logic Processing
5. Database Operations
6. Audit Logging

---

# High Level API Flow

```text
+------------+
| React SPA  |
+------------+
       |
       | Login Request
       v
+------------+
|   Okta     |
+------------+
       |
       | ID Token + Access Token
       v
+------------+
| React SPA  |
+------------+
       |
       | Bearer Token
       v
+----------------+
| Node.js API    |
| Authentication |
| Middleware     |
+----------------+
       |
       | Validate JWT
       v
+----------------+
| Authorization  |
| Middleware     |
+----------------+
       |
       | Verify Roles
       v
+----------------+
| Service Layer  |
+----------------+
       |
       | Database Query
       v
+----------------+
| PostgreSQL     |
+----------------+
       |
       | Response
       v
+----------------+
| React UI       |
+----------------+
```

---

# Authentication Flow

## Objective

Verify user identity using Okta.

## Flow

Step 1:
User clicks Login.

Step 2:
React redirects user to Okta Authorization Server.

Step 3:
User enters credentials.

Step 4:
Okta validates identity.

Step 5:
Okta issues:

* Access Token
* ID Token

Step 6:
User is redirected back to the application.

Step 7:
React stores tokens securely in memory.

Step 8:
Access Token is attached to API requests.

---

# JWT Validation Flow

## Objective

Ensure only authenticated users access APIs.

## Flow

```text
Client Request
      |
      v
Authorization: Bearer <token>
      |
      v
JWT Middleware
      |
      +--> Verify Signature
      |
      +--> Verify Issuer
      |
      +--> Verify Audience
      |
      +--> Verify Expiration
      |
      +--> Extract Claims
      |
      v
Request Allowed
```

## Claims Extracted

```json
{
  "sub": "00u123456",
  "email": "john@example.com",
  "groups": [
    "IAM_ADMIN",
    "IAM_USER"
  ]
}
```

---

# Authorization Flow

## Objective

Determine what actions the user can perform.

## Flow

```text
Request
   |
   v
JWT Verified
   |
   v
Read User Groups
   |
   v
Map Groups To Roles
   |
   v
Role Check
   |
   +--> Allowed
   |
   +--> Denied
```

## Example

| Endpoint              | Required Role |
| --------------------- | ------------- |
| GET /users            | ADMIN         |
| POST /users           | ADMIN         |
| GET /profile          | USER          |
| POST /access-requests | USER          |

---

# User Management API Flow

## Get Users

```text
React
  |
  v
GET /api/users
  |
  v
JWT Validation
  |
  v
Admin Authorization
  |
  v
Okta Users API
  |
  v
User List Returned
```

### Endpoint

```http
GET /api/users
```

### Purpose

Retrieve users from Okta.

---

## Create User

```text
Admin
  |
  v
POST /api/users
  |
  v
Backend Validation
  |
  v
Okta Create User API
  |
  v
Audit Log
  |
  v
Response
```

### Endpoint

```http
POST /api/users
```

---

# Group Management API Flow

## Create Group

```text
Admin
  |
  v
POST /api/groups
  |
  v
Backend
  |
  v
Okta Group API
  |
  v
Audit Log
  |
  v
Success
```

---

# Access Request Flow

## Submit Request

```text
User
  |
  v
POST /api/access-requests
  |
  v
Database
  |
  v
Status = Pending
  |
  v
Audit Log
```

---

## Approve Request

```text
Admin
  |
  v
Approve Request
  |
  v
Backend
  |
  v
Add User To Okta Group
  |
  v
Update Request Status
  |
  v
Audit Log
```

---

# MFA API Flow

## Get Factors

```text
User
  |
  v
GET /api/mfa/factors
  |
  v
Okta Factors API
  |
  v
Factor List
```

---

## Enroll Factor

```text
User
  |
  v
POST /api/mfa/enroll
  |
  v
Okta MFA API
  |
  v
Enrollment Success
```

---

# Audit Logging Flow

## Objective

Track security-sensitive operations.

## Events Logged

* Login
* Logout
* User Creation
* User Deactivation
* Group Assignment
* Access Approval
* MFA Enrollment

## Flow

```text
API Request
    |
    v
Business Action
    |
    v
Audit Service
    |
    v
audit_logs Table
```

---

# Error Handling Flow

```text
Request
   |
   v
Validation Error?
   |
   +--> 400 Bad Request
   |
   v
Authentication Error?
   |
   +--> 401 Unauthorized
   |
   v
Authorization Error?
   |
   +--> 403 Forbidden
   |
   v
Business Error?
   |
   +--> 422 Unprocessable Entity
   |
   v
System Error?
   |
   +--> 500 Internal Server Error
```

---

# Security Controls

## Authentication

* OpenID Connect (OIDC)
* Authorization Code Flow with PKCE

## Authorization

* Role Based Access Control (RBAC)
* Group-Based Permissions

## API Security

* JWT Validation
* HTTPS Only
* Token Expiration Validation
* Secure Headers

## Audit Controls

* User Activity Logging
* Administrative Action Logging
* Access Approval Tracking

---

# Summary

The IAM Portal API architecture follows enterprise security principles by delegating authentication to Okta, enforcing authorization through RBAC, validating JWT tokens on every request, and recording all security-sensitive operations in audit logs.
