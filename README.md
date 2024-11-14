# tp-final-tp2

## Summary

This project is an Express backend that represents a REST API for a food delivery e-commerce application. It supports CRUD operations for entities including **users**, **products**, **orders**, and **order items**. The API enables essential e-commerce functionality like managing users, viewing available products, and creating orders.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Commands](#commands)
- [Testing the API](#testing-the-api)
- [Endpoints](#endpoints)

---

## Getting Started

### Prerequisites

- **Node.js** (>= 14.x)
- **npm** (>= 6.x) or **yarn**
- **SQL Database** (e.g., PostgreSQL, MySQL)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/username/tp-final-tp2.git
   cd tp-final-tp2
   ```

2. **Install dependencies**

    ```bash
    npm install
    ````

3. **Environment Configuration**

Create a `.env` file in the root directory with your environment variables. You should at least include these ones, which are required in order to establish a successful DB connection:

    ```plaintext
    SERVER_PORT=8000
    DB_NAME=<your_database_name>
    DB_USER='root'
    DB_PORT='3306'
    DB_HOST='localhost'
    DB_DIALECT=<your_database_dialect>
    DB_PASSWORD=''
    ```
This is also detailed in the `.env.example` file.

## Commands

### Starting the Server

To start the server, run:

    ```bash
    npm start
    ```

The server will start on the specified port (default: 8000).

### Running seeds

You can populate the database with initial data by executing the following seed commands. This will prodive you with sample users & products.

    ```bash
    npm run 

