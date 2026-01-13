# Bag Brand - Full Stack E-Commerce Platform

A complete full-stack e-commerce application for a bag brand, built from scratch using Node.js, Express, MongoDB, EJS, and Tailwind CSS with comprehensive authentication, role-based access control, and best practices implementation.

## 📋 Project Overview

This is a full-featured e-commerce platform that demonstrates professional-grade server-side web development. The application separates user roles between customers and owners, with distinct functionalities and access levels for each.

## 🚀 Features

### Authentication & Authorization
- Complete user authentication system
- Session-based authentication with secure cookies
- Role-based access control (Customers vs Owners)
- Secure password handling and user data protection

### User Roles
- **Customers**: Browse products, manage cart, place orders, view order history
- **Owners**: Admin dashboard, product management, inventory control, order management

### Core Functionality
- Product catalog with detailed views
- Shopping cart system
- Order processing and management
- User profile management
- Responsive design for all devices

## 🛠️ Tech Stack

### Frontend
- **EJS** - Embedded JavaScript templating engine
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vanilla JavaScript** - Client-side interactivity

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Additional Technologies
- **Express-session** - Session management
- **Cookie-parser** - Cookie handling
- **Bcrypt** - Password hashing
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
SCATCH/
├── config/                 # Configuration files
│   └── database.js        # MongoDB connection setup
├── controllers/           # Route controllers (business logic)
│   ├── authController.js
│   ├── productController.js
│   └── orderController.js
├── middlewares/          # Custom middleware
│   ├── authMiddleware.js # Authentication checks
│   └── roleMiddleware.js # Role-based access control
├── models/              # Mongoose models
│   ├── customer.js     # Customer model
│   ├── owner.js        # Owner model
│   ├── product.js      # Product model
│   └── order.js        # Order model
├── node_modules/       # Dependencies
├── public/            # Static assets
│   ├── images/       # Product images, logos
│   ├── javascripts/  # Client-side JS files
│   └── stylesheets/  # Additional CSS (if any)
├── routes/           # Express route definitions
│   ├── index.js     # Home routes
│   ├── auth.js      # Authentication routes
│   ├── products.js  # Product routes
│   └── orders.js    # Order routes
├── utils/           # Utility functions
│   └── helpers.js  # Helper functions
├── views/          # EJS templates
│   ├── partials/  # Reusable components (header, footer)
│   ├── customer/  # Customer-facing views
│   ├── owner/     # Owner/Admin dashboard views
│   ├── index.ejs  # Homepage
│   └── error.ejs  # Error page
├── .env           # Environment variables
├── .gitignore     # Git ignore rules
├── app.js         # Main application entry point
├── bun.lockb      # Bun lock file
├── package-lock.json
├── package.json   # Dependencies and scripts
├── style.css      # Base styles (if any)
└── tailwind.config.js  # Tailwind CSS configuration
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Still Working on it and making it production ready

