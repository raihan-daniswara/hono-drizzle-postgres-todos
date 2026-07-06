# Hono Drizzle PostgreSQL Todo API

<p>
  <img src="https://img.shields.io/badge/Bun-1.3.14-black?logo=bun" alt="Bun" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Hono-Web_Framework-E36002?logo=hono" alt="Hono" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-Type_Safe_ORM-C5F74F" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/Drizzle_Kit-Migrations-C5F74F" alt="Drizzle Kit" />
  <img src="https://img.shields.io/badge/Docker-Container-2496ED?logo=docker" alt="Docker" />
  <img src="https://img.shields.io/badge/Bun_Test-Testing-black?logo=bun" alt="Bun Test" />
</p>

REST API sederhana menggunakan **Hono**, **Drizzle ORM**, **PostgreSQL**, dan **Bun**.

Project ini dibuat untuk mempelajari pembangunan REST API modern dengan pendekatan **type-safe**, database migration, database seeding, serta integration testing menggunakan Bun.

---

# Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Available Scripts](#available-scripts)
* [API Endpoints](#api-endpoints)
* [Testing](#testing)
* [Author](#author)

---

# Features

### Todo Management

* Create User
* Create Todo
* Get Todos by User ID

### Database

* PostgreSQL Database
* Type-safe Queries menggunakan Drizzle ORM
* Database Migration menggunakan Drizzle Kit
* Database Seeding
* Snake Case Mapping

### Testing

* Bun Test
* Integration Testing
* Dedicated Test Database
* Automatic Database Migration
* Automatic Database Cleanup

### Development

* Bun Runtime
* TypeScript
* Hono Framework
* Dependency Injection pada Database Layer
* Modular Query Architecture

---

# Tech Stack

| Category  | Technology  |
| --------- | ----------- |
| Runtime   | Bun         |
| Language  | TypeScript  |
| Framework | Hono        |
| Database  | PostgreSQL  |
| ORM       | Drizzle ORM |
| Migration | Drizzle Kit |
| Container | Docker      |
| Testing   | Bun Test    |

---

# Installation

Clone repository

```bash
git clone https://github.com/raihan-daniswara/hono-drizzle-postgres-todos.git
```

Masuk ke folder project

```bash
cd hono-drizzle-postgres-todos
```

Install dependencies

```bash
bun install
```

---

# Environment Variables

Buat file `.env` berdasarkan `.env.example`

```env
DATABASE_URL=postgresql://user:password@localhost:5432/todos

ADMIN_DB_URL=postgresql://user:password@localhost:5432/postgres
```

---

## Available Scripts

### Development

Menjalankan development server.

```bash
bun run dev
```

Server akan berjalan di:

```txt
http://localhost:3000
```

### Generate Migration

Membuat migration baru berdasarkan schema Drizzle.

```bash
bun run db:generate:migration
```

### Run Migration

Menjalankan seluruh migration ke database PostgreSQL.

```bash
bun run db:migrate
```

### Seed Database

Mengisi database dengan sample data.

```bash
bun run db:seed
```

### Reset Database

Menghapus database, membuat ulang database, menjalankan seluruh migration, kemudian melakukan seeding secara otomatis.

```bash
bun run db:reset
```

Script ini akan melakukan:

* Drop database jika sudah ada
* Membuat database baru
* Menjalankan seluruh migration
* Menjalankan database seed

> **Warning**
>
> Seluruh data pada database akan dihapus.

### Drizzle Studio

Membuka Drizzle Studio melalui browser.

```bash
bun run db:studio
```

### Testing

Menjalankan seluruh integration test.

```bash
bun test
```

Menjalankan test dalam watch mode.

```bash
bun test --watch
```


### Development

```bash
bun run dev
```

Menjalankan development server menggunakan Bun.

---

### Generate Migration

```bash
bun run db:generate:migration
```

Membuat migration baru berdasarkan schema Drizzle.

---

### Run Migration

```bash
bun run db:migrate
```

Menjalankan seluruh migration ke database PostgreSQL.

---

### Seed Database

```bash
bun run db:seed
```

Mengisi database dengan sample data.

---

### Open Drizzle Studio

```bash
bun run db:studio
```

Membuka Drizzle Studio untuk melihat isi database melalui browser.

---

### Testing

```bash
bun test
```

Menjalankan seluruh integration test.

---

### Watch Mode

```bash
bun test --watch
```

Menjalankan test dalam mode watch.

---

# API Endpoints

Base URL

```text
http://localhost:3000
```

---

## Get Todos

Mengambil seluruh todo berdasarkan User ID.

```http
GET /todos?userId=<uuid>
```

### Example Request

```http
GET /todos?userId=0197dcb4-8d25-72e2-b13d-ef7d9bdb74b4
```

### Success Response

```json
{
  "todos": [
    {
      "id": "0197dcb4-8d25-72e2-b13d-ef7d9bdb74b4",
      "userId": "0197dcb4-8d25-72e2-b13d-ef7d9bdb74b4",
      "title": "Learn Hono",
      "description": "Build REST API",
      "completed": false,
      "createdAt": "2026-07-06T12:00:00.000Z"
    }
  ]
}
```

---

# Testing

Project ini menggunakan **Bun Test** dengan database PostgreSQL terpisah untuk memastikan setiap test berjalan secara independen.

Proses testing meliputi:

* Membuat database testing
* Menjalankan migration secara otomatis
* Menjalankan integration test
* Menghapus database testing setelah selesai

Menjalankan test

```bash
bun test
```

---

# Author

**Raihan Daniswara**

GitHub: https://github.com/raihan-daniswara
