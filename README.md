# Bag Brand - Full Stack E-Commerce Platform

A complete MERN stack e-commerce application for a bag brand, built from scratch with comprehensive authentication, role-based access control, and best practices implementation.

## 📋 Project Overview

This is a full-featured e-commerce platform that demonstrates professional-grade web development practices. The application separates user roles between customers and owners, with distinct functionalities and access levels for each.

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
- **React.js** - UI library for building interactive interfaces
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS3** - Styling and responsive design

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
project-root/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   └── App.js         # Main app component
│   └── public/
├── server/                # Express backend
│   ├── models/           # Mongoose models
│   │   ├── Customer.js   # Customer model
│   │   └── Owner.js      # Owner model
│   ├── routes/           # API routes
│   │   ├── auth.js       # Authentication routes
│   │   ├── products.js   # Product routes
│   │   └── orders.js     # Order routes
│   ├── middleware/       # Custom middleware
│   ├── config/          # Configuration files
│   └── server.js        # Entry point
├── .env                 # Environment variables
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bag-brand
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   - Create `.env` file with required variables (see above)

5. **Run the application**
   
   In the server directory:
   ```bash
   npm start
   ```
   
   In the client directory:
   ```bash
   npm start
   ```

The application will run on:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## 🗃️ Database Models

### Customer Model
- Personal information (name, email, address)
- Authentication credentials
- Order history
- Shopping cart data

### Owner Model
- Admin credentials
- Access level permissions
- Activity logs

### Product Model
- Product details (name, description, price)
- Inventory information
- Categories and tags
- Images

### Order Model
- Order details and status
- Customer reference
- Product items and quantities
- Payment information
- Shipping details

## 🔐 Security Features

- Password hashing with bcrypt
- HTTP-only secure cookies
- Session management
- Environment variable protection
- Input validation and sanitization
- Protected routes with authentication middleware
- Role-based authorization checks

## 🎯 Best Practices Implemented

- **Separation of Concerns**: Clear separation between routes, controllers, and models
- **Environment Configuration**: Secure handling of sensitive data through environment variables
- **Modular Code Structure**: Organized and maintainable codebase
- **RESTful API Design**: Standard HTTP methods and proper endpoint naming
- **Error Handling**: Comprehensive error handling and user feedback
- **Code Reusability**: DRY principles throughout the application

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Owner only)
- `PUT /api/products/:id` - Update product (Owner only)
- `DELETE /api/products/:id` - Delete product (Owner only)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details

## 🚧 Future Enhancements

- Payment gateway integration
- Email notifications
- Product reviews and ratings
- Advanced search and filtering
- Wishlist functionality
- Real-time inventory updates
- Analytics dashboard for owners

## 📚 Learning Outcomes

This project provided hands-on experience with:
- Full-stack JavaScript development
- RESTful API design and implementation
- Database modeling and relationships
- Authentication and authorization patterns
- Session management and cookies
- Environment configuration
- Modern web development best practices

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a foundational MERN stack project to understand complete full-stack development workflows.

---

**Note**: This project was created for educational purposes and demonstrates fundamental concepts of building a production-ready web application.
