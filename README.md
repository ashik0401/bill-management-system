# Bill Management System - Marigold

A responsive, full-stack Bill Management website that allows users to pay utility bills using their account balance. This application supports various types of bills such as electricity, gas, water, internet, credit card bills, and tuition fees.

---

## 🚀 Project Overview

The Bill Management System is designed to simplify the way users pay their utility bills online. Users can view a list of their bills, select a bill to pay, and manage their balance. The system includes secure authentication (email/password and Google login), profile management, and real-time payment updates.

---

## 🔗 Live Demo

### 🔗 Live Name: Pay-bills
### 🔗 Live Website: (https://pay-bill-management-secure.netlify.app/)

---

## 📌 Key Features

- **User Authentication**
  - Email & password login with password validation
  - Google social login
  - Forgot password functionality (without email verification)

- **User Profile**
  - View profile with photo, name, and email
  - Update profile photo and display name

- **Bills Management**
  - View a list of utility bills (electricity, gas, water, internet, credit cards, tuition fees)
  - Filter bills by type using a dropdown menu
  - Pay bills using current balance
  - Prevent paying the same bill twice
  - Visual indicator (green tick) for paid bills

- **Balance Management**
  - Default user balance: 10,000 BDT
  - Balance updates automatically after bill payment

- **Responsive Design**
  - Fully responsive layout for mobile, tablet, and desktop

- **Routing & Navigation**
  - Protected routes for pages except Home, Login, and Register
  - Redirect users to intended protected page after login
  - Navbar with conditional rendering of login/register buttons or user profile dropdown

- **Home Page**
  - Navbar, Slider/Carousel showcasing partner organizations (using SwiperJS)
  - Display of bill-paying organizations (DESCO, NESCO, WASA, etc.)
  - Additional sections inspired by Bangladeshi banking websites
  - Footer with essential links and information

- **Security**
  - Firebase authentication with environment variables to secure keys
  - Authorized domains configured for deployment platform

---

## 📦 Technologies & Packages Used

- React.js (SPA architecture)
- React Router DOM (for routing and protected routes)
- Firebase Authentication (Email/password + Google OAuth)
- SwiperJS (for sliders/carousels)
- React Toastify (for notifications)
- CSS / Responsive Design (Media queries & Flexbox/Grid)
- Environment variables for Firebase configuration
- Netlify / Surge / Firebase Hosting for deployment

---

👨‍💻 Author

Developed by [Ashik Mahmud]
