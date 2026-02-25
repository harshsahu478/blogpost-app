# 📝 BlogPost App

A full-stack blog platform built using **React, Appwrite, and Tailwind CSS**.  
This application allows users to securely register, log in, and manage blog posts with full CRUD functionality.

The project demonstrates authentication handling, protected routes, rich text editing, state management, and deployment practices.

---

## 🚀 Live Demo

🔗 [Live Demo](https://harsh-blogpost.netlify.app/)  

---

## 💻 GitHub Repository

🔗 [View Repository](https://github.com/harshsahu478/blogpost-app)
---

## ✨ Features

- 🔐 User Authentication (Signup / Login / Logout)
- 🛡 Protected Routes with role-based access control
- ✍ Create, Edit, Delete, and View blog posts (CRUD)
- 📝 Rich Text Editor using TinyMCE
- 📋 Form validation using React Hook Form
- 🗂 Backend integration using Appwrite (Database, Auth, Storage)
- 🌐 Deployed on Netlify with environment variables

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Redux Toolkit
- React Hook Form
- TinyMCE

### Backend / BaaS
- Appwrite

### Deployment
- Netlify

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/harshsahu478/blogpost-app.git
cd blogpost-app
```

### 2️⃣ Install dependencies

```bash
npm install
```
### 3️⃣ Backend Setup (Appwrite)

Before running the project, create an Appwrite project and configure:

- Create a Database
- Create a Collection named `posts`
- Add attributes:
  - title (string)
  - content (string)
  - featuredImage (string)
  - status (string)
  - userId (string)

- Create a Storage Bucket for blog images
- Set appropriate read/write permissions

### 4️⃣ Setup Environment Variables (.env)

Create a `.env` file and add:

```env
VITE_APPWRITE_URL=your_appwrite_url
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### 5️⃣ Run the development server

```bash
npm run dev
```
