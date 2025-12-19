# Venue Booking System

A full-stack **Venue Booking System** with backend APIs and a React dashboard frontend.  

- **Backend:** Node.js, Express, PostgreSQL (NeonDB)  
- **Frontend:** React  
- **Deployment:** Vercel  

---

## **Live Demo**

- **Backend API:** [https://sportomic-tau.vercel.app/](https://sportomic-tau.vercel.app/)  
- **Frontend Dashboard:** [https://sportomic-tau.vercel.app/](https://sportomic-tau.vercel.app/)  

---

## **Table of Contents**

- [Overview](#overview)  
- [Features](#features)  
- [Folder Structure](#folder-structure)  
---

## **Overview**

This project implements a venue booking system where users can:

- View available venues  
- Register as members  
- Make bookings  
- Track transactions  

The backend provides RESTful APIs, and the frontend dashboard allows visual access to all entities.

---

## **Features**

- CRUD operations for **Venues**, **Members**, **Bookings**, and **Transactions**  
- PostgreSQL database (NeonDB) with SSL configuration  
- RESTful APIs with proper error handling  
- React frontend dashboard with navigation tabs  
- Fully deployed on **Vercel**  

---

## **Folder Structure**

venue-booking-backend/
│
├── src/
│ ├── db/
│ │ └── index.js # PostgreSQL connection
│ ├── routes/
│ │ ├── venues.js
│ │ ├── members.js
│ │ ├── bookings.js
│ │ └── transactions.js
│ ├── app.js # Express server
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.js
│ │ │ ├── VenueList.js
│ │ │ ├── MemberList.js
│ │ │ ├── BookingList.js
│ │ │ └── TransactionList.js
│ │ ├── api.js # API helper
│ │ └── App.js
│
├── .env # Local environment variables
├── package.json
└── README.md


