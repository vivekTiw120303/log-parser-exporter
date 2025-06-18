# 🧠 Log Parser & Exporter API

A fully-featured backend system for uploading, parsing, filtering, exporting, and analyzing server logs (Apache or JSON). Built with Node.js, Express, and MongoDB.

---

## 🚀 Features

- 📤 Upload `.log` or `.json` files
- 🔍 Filter logs by level, date, and message content
- 📊 Export logs as JSON or CSV
- 🧮 Log stats by level and day
- 🗂 Pagination and full-text search
- 🔐 JWT authentication for secure routes
- 🧾 API documentation via Swagger UI
- 🐳 Dockerized for easy container deployment

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (via Mongoose)
- **Auth**: JWT + bcrypt
- **Docs**: Swagger (OpenAPI 3)
- **Tests**: Jest, Supertest
- **Deployable**: Docker (ready)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/log-parser-exporter.git
cd log-parser-exporter
npm install
```

### 2. Setup Environment

Create .env based on the .env.example:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/logsdb
JWT_SECRET=supersecretkey
Use your Atlas connection string if needed.
```

### 3. Seed Admin User (Optional)

```bash
node src/seed.js
Creates a user:
```

Email: admin@example.com
Password: test123

### 4. Start the Server

```bash
npm start
Server runs on:
➡️ http://localhost:5000
Swagger UI at:
➡️ http://localhost:5000/api-docs
```

🧪 Run Tests
```bash
npm test
Tests are written for log parsing and routes.
```

🐳 Run with Docker
```bash
docker build -t log-parser-exporter .
docker run -p 5050:5000 \
  -e MONGO_URI="your-mongodb-uri" \
  -e JWT_SECRET="your-secret" \
  log-parser-exporter
```

🔐 API Auth (JWT)
Login at:

```bash
POST /api/auth/login
```

Use Authorization: Bearer <token> in headers for protected routes like:
```bash
POST /api/upload
GET /api/logs/stats
```

📘 API Endpoints

| Method | Route             | Description                           | Auth |
|--------|------------------|--------------------------------------- |------ |
| POST   | `/api/upload`     | Upload `.log` or `.json` file         | ✅   |
| GET    | `/api/logs`       | Filter logs by level/date/keyword     | ❌   |
| GET    | `/api/export`     | Export logs as JSON/CSV               | ❌   |
| GET    | `/api/logs/stats` | Get total logs and stats by level/day | ✅   |
| POST   | `/api/auth/login` | Login and get JWT token               | ❌   |

🙌 Contributions

PRs welcome!
Feel free to fork and adapt this for any backend logging tool or log-based analytics service.
