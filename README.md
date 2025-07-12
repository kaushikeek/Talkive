# MERN Stack Real-Time Chat Application

A full-stack real-time chat application built using the **MERN stack (MongoDB, Express, React, Node.js)** with **Socket.IO** for seamless bidirectional communication. Styled using **Tailwind CSS**, this app offers a clean and modern chat UI with live messaging functionality, authentication, and toast notifications.

> Live Demo: [Click here to try it out](https://talkive.vercel.app)  
>  [Github Repository](https://github.com/kaushikeek/Talkive)

---

## Tech Stack

### Frontend

- **React 19** (with Vite for lightning-fast builds)
- **React Router DOM** v7 – client-side routing
- **Socket.IO Client** – real-time connection to server
- **Axios** – API communication
- **Tailwind CSS** – utility-first styling
- **React Hot Toast** – elegant toast notifications

### Backend

- **Express.js** – lightweight web framework
- **MongoDB + Mongoose** – database & object modeling
- **Socket.IO** – real-time bi-directional event-based communication
- **JWT (jsonwebtoken)** – user authentication
- **BcryptJS** – password hashing
- **Cloudinary** – image/file uploads
- **CORS** & **dotenv** – environment and middleware support

---

## Installation & Setup

### Local Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kaushikeek/Talkive.git
   cd Talkive
   ```

2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

4. **Setup Environment Variables:**

   Inside the `/server` directory, create a `.env` file with:

   ```env
   PORT=
   MONGO_URI=
   JWT_SECRET=
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   ```

   Inside the `/client` directory, create a `.env` file with:

   ```env
   VITE_BACKEND_URL=
   ```

5. **Run the development servers:**
   - Backend: `npm run dev`
   - Frontend: `npm run dev`

---

## Deployment

- Deployed on [Vercel](https://vercel.com/)
- [Project Live Link](https://talkive.vercel.app)

---

## Features

- User Authentication (JWT-based)
- Real-time messaging with **Socket.IO**
- Responsive and modern UI with Tailwind CSS
- Toast notifications for chat events and alerts
- Cloudinary image upload integration
- Modular code architecture

---

## Project Structure

```
Talkive/
│
├── client/               # React frontend
│   ├── src/
│   └── public/
│
└── server/               # Node.js backend
    ├── controllers/
    ├── lib/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

---
