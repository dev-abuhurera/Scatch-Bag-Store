# Bag Brand - E-Commerce Platform

![Bag Brand Platform](https://github.com/user-attachments/assets/479c8740-bed0-4e02-ab83-aead7cf90f98)

A full-stack e-commerce application built with a focus on backend architecture, authentication, and role-based access control. This project serves as a comprehensive learning resource for scalable web development best practices.

## 📋 Overview

This application showcases a production-ready server-side implementation with two distinct user roles: **Customers** and **Owners**. While the UI is functional and responsive, the primary emphasis is on demonstrating proper backend architecture, security practices, and separation of concerns.

**Perfect for:**
- Developers learning backend development best practices
- Understanding role-based authentication systems
- Studying production-grade code architecture
- Freshers exploring full-stack application structure

## ✨ Key Features

### 🔐 Authentication & Security
- Industry-standard user authentication (signup/login)
- Session-based authentication with secure cookie management
- Role-based access control (RBAC) with protected routes
- bcrypt password hashing for enhanced security
- JWT token implementation
- Environment variable configuration for sensitive data

### 👥 Dual User Roles

**Customers Can:**
- Browse complete product catalog with detailed views
- Add items to cart and manage quantities
- Place and track orders
- View complete order history
- Update account information and preferences

**Owners Can:**
- Access comprehensive admin dashboard
- Full product management (create, update, delete)
- Inventory control and tracking
- Order management and fulfillment
- Analytics and reporting capabilities

### 🏗️ Architecture Highlights
- Complete separation of concerns (MVC pattern)
- Optimized data retrieval and storage operations
- Cloud-based asset storage integration
- Protected API routes with middleware validation
- Production-ready codebase structure
- Scalable database design with MongoDB

## 🛠️ Technology Stack

### Frontend
- **EJS** - Server-side templating engine
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Client-side interactivity

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Additional Dependencies
- `express-session` - Session management
- `cookie-parser` - Cookie handling
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT authentication
- `dotenv` - Environment variable management
- `multer` - File upload handling (for product images)
- `connect-mongo` - MongoDB session store

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager
- Git

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bag-brand-ecommerce.git
   cd bag-brand-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret_key
   JWT_SECRET=your_jwt_secret_key
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
bag-brand-ecommerce/
├── config/           # Configuration files (database, cloudinary)
├── controllers/      # Route controllers
├── models/          # Database models
├── routes/          # API routes
├── views/           # EJS templates
├── public/          # Static assets (CSS, JS, images)
├── middleware/      # Custom middleware (auth, validation)
├── utils/           # Utility functions
├── .env             # Environment variables
├── app.js           # Express app configuration
└── server.js        # Server entry point
```

## 🎯 Learning Outcomes

This project demonstrates:

- Implementing secure authentication flows
- Building role-based authorization systems
- Structuring scalable Express.js applications
- Working with MongoDB and Mongoose ODM
- Session management and cookie security
- Environment-based configuration
- RESTful API design principles
- MVC architectural pattern
- Production deployment considerations

## 🔒 Security Features

- Password encryption using bcrypt
- HTTP-only cookies for session tokens
- CSRF protection
- Input validation and sanitization
- Secure headers with helmet.js
- Rate limiting for API endpoints
- Environment-based secrets management

## 🚀 Deployment

**Live Demo:** [Deployed on Railway](https://scatch-bag-store-production.up.railway.app/)

This application is deployed on **Railway** for its simplicity, developer-friendly experience, and seamless MongoDB integration.

Railway provides:
- Easy deployment from GitHub
- Automatic HTTPS
- Built-in environment variable management
- Free tier for side projects
- Excellent performance and reliability

The application can also be deployed to other platforms like Heroku, DigitalOcean, AWS EC2, or Vercel.

Ensure all environment variables are properly configured in your deployment platform.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For questions or feedback, please reach out through GitHub issues or contact the maintainer directly.

---

**Note:** This project prioritizes backend architecture and functionality over UI/UX design. It serves as an educational resource for understanding production-grade backend development practices.
