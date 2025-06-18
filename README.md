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
