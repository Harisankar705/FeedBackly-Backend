Survey App Documentation

Overview

The Survey App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to submit surveys and enables administrators to manage them.

Features

Survey Form: Users can fill out surveys.

Admin Dashboard: Admins can view and manage submitted surveys.

Authentication: Users and admins must log in to access their respective features.

Real-time Updates: Surveys update instantly using React Query.

Tech Stack

Frontend: React + Tailwind CSS

Backend: Node.js + Express.js

Database: MongoDB

State Management: Zustand (or Redux)

API Handling: React Query

Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/YOUR_USERNAME/survey-app.git
cd survey-app

2️⃣ Install Dependencies

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

3️⃣ Configure Environment Variables

Create a .env file in the server/ folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the Application

# Start Backend
cd server
npm start

# Start Frontend
cd ../client
npm start

The app will run on:

Frontend: http://localhost:5173

Backend: http://localhost:5000

How It Works

Any user can access the survey form.

Admins can:

View all submitted surveys.

Add new surveys.

Authentication ensures only admins can manage surveys.

Deployment

Frontend Deployment

Deploy on Vercel or Netlify.

Run:

npm run build

Upload the build/ folder.

Backend Deployment

Deploy on Render or Railway.app.

Use MongoDB Atlas for database hosting.

Challenges & Design Decisions

Implementing authentication securely using JWT.

Managing real-time updates with React Query.

Handling role-based access (User vs. Admin).

Live Demo

(If deployed, add your Vercel/Netlify link here)

