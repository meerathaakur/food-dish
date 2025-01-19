# Food Calorie Calculator - React Web Application

## Overview

This web application allows users to scan a QR code representing a food dish, retrieve information about its constituents, and calculate the total calorie count based on the quantity of each item. Users can modify the quantities of individual items, and the total calorie count will dynamically update in real-time.

The application uses React.js on the frontend and Node.js with MongoDB on the backend to manage food dishes and their constituent calorie data.

## Features

- **QR Code Scanning**: Users can scan a QR code that contains dish information (name and constituent items).
- **Calorie Calculation**: The app fetches calorie information for each constituent item from the backend and calculates the total calories.
- **Dynamic Quantity Adjustment**: Users can modify the quantity of each constituent item, and the calorie count updates automatically.
- **Real-Time Calorie Update**: The total calorie count is updated in real-time as users modify the quantities of items.
- **Inventory Management**: A backend with CRUD APIs to manage dishes and their constituent items (for admin users).

## Tech Stack

- **Frontend**: React.js, react-qr-reader (for QR code scanning)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (to store dishes and constituent calorie data)

## Folder Structure

```bash
├── backend/                  # Backend (Node.js, Express)
│   ├── config/                # Configuration files (e.g., database, auth)
│   ├── controllers/           # Route handlers
│   ├── models/                # Database models (e.g., Dish, Item)
│   ├── routes/                # API routes for CRUD operations
│   ├── .env                   # Environment variables (e.g., DB_URI, JWT_SECRET)
│   ├── server.js              # Server setup and entry point
├── frontend/                  # Frontend (React.js)
│   ├── public/                # Public assets (e.g., index.html)
│   ├── src/                   # React components and app code
│   │   ├── components/        # React components (QRScanner, DishDetails)
│   │   ├── services/          # API service files for fetching data
│   │   ├── App.js             # Main React app entry point
│   │   ├── index.js           # App rendering and DOM attachment
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Lock file for consistent installs
├── README.md                  # Project documentation
```

## Clone Repository
git clone https://github.com/meerathaakur/food-dish.git
cd food-dish

## SET UP BACKEND
cd backend

## Install Dependencies
npm install

## start Backend server
npm run start

## SET UP FRONTEND
cd frontend

## Install Dependencies
npm install

## start frontend server
npm run start