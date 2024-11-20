# tp-final-tp2
# Food Delivery E-Commerce Backend

**Project Name**: tp-taller-de-programacion-2
**Version**: 1.0.0  
**Description**: This Express.js application serves as the backend for a food delivery e-commerce platform. It handles user authentication, user management, product management, order processing, and role-based access control. The app uses Sequelize for database interactions and JWT for secure authentication.

---

## Features

- **User Authentication**: Secure login with JWT.
- **User Management**: CRUD operations for user data.
- **Role-based Access Control**: Restrict endpoints based on user roles (admin, employee, customer).
- **Soft Delete**: Implements paranoid mode for user data.
- **Password Security**: Passwords are hashed using bcrypt.

---

## Prerequisites

- **Node.js**: v16.x or later
- **MySQL**: 8.x or compatible (or any other supported database by modifying the connection configuration in Sequelize, i.e. SQL Server).
- **Environment Variables**: Configure a `.env` file with the following variables:
  ```env
  DB_NAME=your_database_name
  DB_USER=your_database_user
  DB_PASSWORD=your_database_password
  DB_HOST=localhost
  DB_PORT=3306
  DB_DIALECT=mysql
  JWT_SECRET=your_jwt_secret

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:franco-paganucci/tp-final-tp2.git
   cd tp-final-tp2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the environment file**:
Create a `.env` file in the root directory and configure it as shown in the Prerequisites section.

4. **Start the application**:
For development, it is recommended to run the app in dev mode so it watches for changes.
    ```bash
    npm run dev
    ```
   
---

## Endpoints

### User Endpoints (`/users`)

#### **POST /login**
**Description**: Authenticate user and generate JWT.  
**Request Body**:
```json
{
  "mail": "user@example.com",
  "password": "securepassword"
}
```

**Response**:
```json
{
  "user": {
    "id": 1,
    "mail": "user@example.com",
    "roleId": 2
  },
  "token": "jwt_token"
}
```

#### **GET /**
**Description**: Get a list of all users (Admins/Employees only).

**Headers**
```json
{
    "Authorization": "Bearer jwt_token"
}
```

**Response**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "mail": "john.doe@example.com",
    "address": "123 Main St",
    "roleId": 1
  }
]
```

#### **GET /**
**Description**: Get user details by ID (Admins/Employees only).

**Params**
- **id**: string

**Headers**
```json
{
    "Authorization": "Bearer jwt_token"
}
```

**Response**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "mail": "john.doe@example.com",
    "address": "123 Main St",
    "roleId": 1
  }
]
```

#### **POST /**
**Description**: Create a new user.

**Headers**
```json
{
    "Authorization": "Bearer jwt_token"
}
```

**Request Body**:
```json
{
  "name": "Jane Doe",
  "mail": "jane.doe@example.com",
  "address": "456 Side St",
  "password": "newsecurepassword",
  "roleId": 2
}
```

**Response**:
```json
{
  "user": {
    "id": 1,
    "mail": "jane.doe@example.comm",
    "roleId": 2
  },
}
```

#### **PUT /**
**Description**: Update user details (Admins only).

**Params**
- **id**: string

**Headers**
```json
{
    "Authorization": "Bearer jwt_token"
}
```

**Request Body**:
```json
{
  "name": "Jane Doe",
  "roleId": 3
}
```

**Response**:
```json
{
  "user": {
    "name": "Jane Doe",
    "id": 1,
    "mail": "jane.doe@example.comm",
    "roleId": 3
  },
}
```

#### **DELETE /**
**Description**: Soft delete a user (Admins only).

**Params**
- **id**: string

**Headers**
```json
{
    "Authorization": "Bearer jwt_token"
}
```

**Response**:
```json
{
  "message": "User soft deleted successfully"
}
```