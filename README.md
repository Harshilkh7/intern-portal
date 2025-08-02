# 🧑‍💻 Intern Portal

A full-stack Intern Management Portal designed to manage intern data, referrals, and donations. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js).

---

## 🔧 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB
- **Deployment:**
  - Frontend: GitHub Pages
  - Backend: Render

---

## 🚀 Getting Started

### 📁 Clone the Repository

git clone https://github.com/your-username/intern-portal.git
cd intern-portal

---

## 🔙 Backend Setup

### Step 1: Navigate to the backend folder
cd backend

### Step 2: Install backend dependencies
npm install

### Step 3: Create a .env file and add this:
PORT=5000
MONGO_URI=your_mongodb_connection_string

### Step 4: Start the backend server
npm start
The backend will run on http://localhost:5000

---

## 💻 Frontend Setup
### Step 1: Navigate to the frontend folder
cd ../frontend

### Step 2: Install dependencies
npm install
In case you are setting up manually, install these:

npm install react react-dom react-scripts
npm install react-router-dom axios
npm install -D tailwindcss postcss autoprefixer

### Step 3: (Optional) Init Tailwind
npx tailwindcss init -p

### Step 4: Start development server
npm start
App will be live on: http://localhost:3000

## 🌐 Frontend Deployment on GitHub Pages
### Step 1: Install gh-pages
npm install --save gh-pages

### Step 2: Add homepage to package.json
"homepage": "https://your-username.github.io/intern-portal"

### Step 3: Add deploy scripts
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

### Step 4: Deploy 🚀
npm run deploy
Live URL: https://your-username.github.io/intern-portal

---

## 🛰️ Backend Deployment on Render
Push your repo to GitHub.

Go to https://render.com.

Create a New Web Service.

Connect your repo and choose:

Build Command: npm install

Start Command: npm start

Add the .env variables:

PORT=5000

MONGO_URI=your_mongodb_uri

Render will give you a live API URL like: https://intern-portal-backend.onrender.com

## ✨ Features
🔐 Dummy login

📊 Dashboard for Interns

🔗 Referral Code Tracking

💸 Total Donations Tracking

🏆 Optional Leaderboard

✅ Admin Approval for Swaps

## 📌 To-Do
 Add real authentication

 Improve UI/UX

 Add email notifications

 API documentation (Swagger)

## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

