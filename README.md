# YouTube Clone Backend API

A production-ready RESTful backend API for a YouTube-like platform built with Node.js, Express.js, MongoDB, JWT Authentication, and Cloudinary. The API provides secure user authentication, profile management, media uploads, channel information and watch history functionality.

---

## 🚀 Live API

https://backend-project-ymaz.onrender.com

---

## ✨ Features

- JWT Authentication
- Access & Refresh Token System
- Secure HTTP-only Cookies
- User Registration & Login
- User Logout
- Password Management
- Profile Management
- Avatar Upload
- Cover Image Upload
- Channel Profile API
- Watch History API
- MongoDB Database Integration
- Cloudinary Media Storage

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- Cloudinary
- Cookie Parser
- CORS

---

## 🌐 Base URL

```http
https://backend-project-ymaz.onrender.com/api/v1/users
```

---

# 🔐 Authentication

Protected routes require authentication.

Example:

```http
Authorization: Bearer <access_token>
```

---

# 📌 API Endpoints

## 1. Register User

```http
POST /users/register
```

### Content-Type

```http
multipart/form-data
```

### Request Fields

| Field | Required | Description |
|---------|---------|---------|
| fullName | Yes | User Full Name |
| email | Yes | User Email |
| username | Yes | Unique Username |
| password | Yes | User Password |
| avatar | Yes | Profile Image |
| coverImage | No | Cover Image |

### Success Response

```json
{
  "success": true,
  "message": "User registered Successfully"
}
```

---

## 2. Login User

```http
POST /users/login
```

### Request Body (Email)

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Request Body (Username)

```json
{
  "username": "john",
  "password": "password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User logged In Successfully"
}
```

---

## 3. Logout User

```http
POST /users/logout
```

### Authentication Required

✅ Yes

### Header

```http
Authorization: Bearer <access_token>
```

---

## 4. Refresh Access Token

```http
POST /users/refresh-token
```

### Description

Generates a new access token using a valid refresh token.

### Authentication Required

❌ No

Refresh token can be sent through:

- Cookies
- Request Body

---

## 5. Change Password

```http
POST /users/change-password
```

### Authentication Required

✅ Yes

### Request Body

```json
{
  "oldPassword": "oldPassword",
  "newPassword": "newPassword",
  "confirmPassword": "newPassword"
}
```

---

## 6. Get Current User

```http
GET /users/current-user
```

### Authentication Required

✅ Yes

### Header

```http
Authorization: Bearer <access_token>
```

---

## 7. Update Account Details

```http
PATCH /users/update-account
```

### Authentication Required

✅ Yes

### Request Body

```json
{
  "fullName": "Updated Name",
  "email": "updated@example.com"
}
```

---

## 8. Update Avatar

```http
PATCH /users/update-avatar
```

### Authentication Required

✅ Yes

### Content-Type

```http
multipart/form-data
```

### Form Field

```text
avatar
```

---

## 9. Update Cover Image

```http
PATCH /users/update-coverImage
```

### Authentication Required

✅ Yes

### Content-Type

```http
multipart/form-data
```

### Form Field

```text
coverImage
```

---

## 10. Get User Channel Profile

```http
GET /users/c/:username
```

### Authentication Required

✅ Yes

### Example

```http
GET /users/c/harshsahu
```

---

## 11. Get Watch History

```http
GET /users/history
```

### Authentication Required

✅ Yes

### Description

Returns user's watch history along with video owner details.

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000

MONGODB_URI=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CORS_ORIGIN=
```

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/harshsahu478/youtube-clone-backend.git
```

Move into project directory:

```bash
cd youtube-clone-backend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

---

# 🧪 API Testing

Import the Postman Collection included in this repository to test all endpoints quickly.

---

# 🚀 Deployment

Backend deployed on Render:

https://backend-project-ymaz.onrender.com

---

# 👨‍💻 Author

**Harsh Sahu**

GitHub:
https://github.com/harshsahu478

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
