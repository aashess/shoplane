# 🛒 Shoplane – Full-Stack E-commerce Platform

A modern full-stack e-commerce platform built with **Next.js, Node.js, Express, Prisma, and PostgreSQL**.
This project includes authentication, product management, shopping cart, order processing, payments, and admin features.

---

## 🚀 Features

* User authentication (JWT-based)
* Role-based access (Customer, Admin)
* Product management (CRUD for admins)
* Shopping cart functionality
* Order creation and order history
* Image upload with Cloudinary
* Payment integration (Stripe test mode)
* Email notifications (Nodemailer/Resend)
* Product search and filters
* Fully responsive UI with Tailwind CSS

---

## 🛠 Tech Stack

**Frontend**

* Next.js (React framework)
* Tailwind CSS (styling)
* React Query (API fetching & state)

**Backend**

* Node.js + Express
* Prisma ORM
* PostgreSQL database
* JWT for authentication
* Bcrypt for password hashing

**Other Tools**

* Cloudinary (image upload)
* Stripe (payments)
* Nodemailer/Resend (emails)
* Docker (containerization)

---

## 📂 Project Structure

```
/frontend   → Next.js app
/backend    → Node.js + Express API
/prisma     → Prisma schema & migrations
```

---

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/shoplane.git
cd shoplane
```

### 2. Setup Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment

* Frontend → Vercel/Netlify
* Backend → Render/Fly.io
* Database → Supabase/Neon

---

## 📸 Screenshots



---

## 🧑‍💻 Author

* **Aashish**
  Passionate about full-stack development, web3, and DevOps.

---

## ⭐ Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the MIT License.

