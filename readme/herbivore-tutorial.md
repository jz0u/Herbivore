# The Herbivore Project - Beginner's Guide and Tutorial

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Getting Started](#2-getting-started)
3. [Building the Frontend](#3-building-the-frontend)
4. [Creating the Backend](#4-creating-the-backend)
5. [Database Setup](#5-database-setup)
6. [Step-by-Step Features](#6-step-by-step-features)
7. [Deployment Guide](#7-deployment-guide)
8. [Learning Resources](#8-learning-resources)

## 1. Project Overview

### What We're Building
The Herbivore Project is a web application for cataloging cannabis strains. Think of it like a "Goodreads for cannabis" - users can browse strains, read reviews, and get recommendations.

### Skills You'll Learn
- Frontend Development with React
- Backend Development with Node.js
- Database Management with PostgreSQL
- API Development
- Authentication
- Responsive Design
- Deployment

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript
- A computer with Node.js installed
- A code editor (we recommend VS Code)
- Git for version control

## 2. Getting Started

### Development Environment Setup

#### 1. Install Required Software
```bash
# Install Node.js (https://nodejs.org)
# Install Git (https://git-scm.com)
# Install VS Code (https://code.visualstudio.com)

# Verify installations
node --version
npm --version
git --version
```

#### 2. VS Code Extensions
Install these helpful extensions:
- ESLint
- Prettier
- GitLens
- ES7+ React/Redux/React-Native snippets

#### 3. Project Setup
```bash
# Create project directory
mkdir herbivore-project
cd herbivore-project

# Initialize Git repository
git init

# Create frontend and backend directories
mkdir frontend backend
```

#### 4. Version Control Best Practices
```bash
# Create .gitignore file
touch .gitignore

# Add common files to ignore
node_modules/
.env
.DS_Store
build/
dist/
```

## 3. Building the Frontend

### Step 1: Create React App
```bash
# Navigate to frontend directory
cd frontend

# Create new React app
npx create-react-app .

# Install additional dependencies
npm install @reduxjs/toolkit react-redux axios react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install @/components/ui/card  # shadcn/ui components
```

### Step 2: Project Structure
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Input.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   └── strains/
│   │       ├── StrainCard.jsx
│   │       ├── StrainList.jsx
│   │       └── StrainDetail.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── StrainCatalog.jsx
│   │   └── UserProfile.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   ├── utils/
│   │   ├── api.js
│   │   └── helpers.js
│   └── App.jsx
└── package.json
```

### Step 3: Basic Component Example
Let's create a simple strain card component:

```jsx
// src/components/strains/StrainCard.jsx
import React from 'react';

const StrainCard = ({ strain }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-bold">{strain.name}</h3>
      <div className="text-sm text-gray-500">{strain.type}</div>
      <div className="mt-2">
        <span>THC: {strain.thc}%</span>
        <span className="ml-2">CBD: {strain.cbd}%</span>
      </div>
      <div className="mt-2">
        {strain.effects.map(effect => (
          <span key={effect} className="mr-2 text-sm bg-blue-100 px-2 py-1 rounded">
            {effect}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StrainCard;
```

### Step 4: Setting Up Routes
```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StrainCatalog from './pages/StrainCatalog';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strains" element={<StrainCatalog />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 4. Creating the Backend

### Step 1: Initial Setup
```bash
# Navigate to backend directory
cd ../backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express cors dotenv pg jsonwebtoken bcryptjs
npm install -D nodemon
```

### Step 2: Project Structure
```
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── strainController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── error.js
│   ├── models/
│   │   ├── strain.js
│   │   └── user.js
│   ├── routes/
│   │   ├── strainRoutes.js
│   │   └── userRoutes.js
│   └── app.js
├── .env
└── package.json
```

### Step 3: Basic Express Server
```javascript
// src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Herbivore API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 4: Create a Basic Route
```javascript
// src/routes/strainRoutes.js
const express = require('express');
const router = express.Router();

// Get all strains
router.get('/', async (req, res) => {
  try {
    // In the future, this will fetch from database
    const strains = [
      {
        id: 1,
        name: 'Blue Dream',
        type: 'Hybrid',
        thc: 18,
        cbd: 0.1,
        effects: ['Relaxed', 'Happy', 'Creative']
      }
    ];
    res.json(strains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```

## 5. Database Setup

### Step 1: PostgreSQL Installation
1. Download and install PostgreSQL from https://www.postgresql.org/download/
2. Create a new database:
```sql
CREATE DATABASE herbivore;
```

### Step 2: Basic Tables
```sql
-- Create strains table
CREATE TABLE strains (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    thc DECIMAL(4,2),
    cbd DECIMAL(4,2),
    effects TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 3: Database Connection
```javascript
// src/config/database.js
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
```

## 6. Step-by-Step Features

### Feature 1: User Authentication

1. Create signup endpoint:
```javascript
// src/controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/database');

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Insert user
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
      [username, email, hashedPassword]
    );
    
    // Create token
    const token = jwt.sign(
      { id: result.rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup };
```

### Feature 2: Strain Catalog

1. Create strain listing component:
```jsx
// src/components/strains/StrainList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StrainCard from './StrainCard';

const StrainList = () => {
  const [strains, setStrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStrains = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/strains');
        setStrains(response.data);
      } catch (error) {
        console.error('Error fetching strains:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStrains();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {strains.map(strain => (
        <StrainCard key={strain.id} strain={strain} />
      ))}
    </div>
  );
};

export default StrainList;
```

## 7. Deployment Guide

### Step 1: Prepare for Production
1. Frontend:
```bash
# Build React app
cd frontend
npm run build
```

2. Backend:
```bash
# Create production config
NODE_ENV=production
```

### Step 2: Deploy to Heroku
1. Install Heroku CLI
2. Create Heroku apps:
```bash
# Create apps
heroku create herbivore-frontend
heroku create herbivore-backend

# Add PostgreSQL
heroku addons:create heroku-postgresql --app herbivore-backend
```

### Step 3: Deploy
```bash
# Deploy backend
git subtree push --prefix backend heroku-backend main

# Deploy frontend
git subtree push --prefix frontend heroku-frontend main
```

## 8. Learning Resources

### JavaScript/React
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [React Official Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Router Documentation](https://reactrouter.com/)

### Node.js/Express
- [Node.js Documentation](https://nodejs.org/docs/latest-v14.x/api/)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)

### Database
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [SQL Basics](https://www.w3schools.com/sql/)

### Development Tools
- [Git Tutorial](https://git-scm.com/docs/gittutorial)
- [VS Code Tips](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

### Next Steps
1. Start with the frontend components
2. Move on to backend routes
3. Implement authentication
4. Add database functionality
5. Deploy your application

Need help? Join these communities:
- [React Discord](https://discord.gg/react)
- [Node.js Discord](https://discord.gg/nodejs)
- Stack Overflow
- Reddit (r/webdev, r/reactjs, r/nodejs)

Would you like me to:
1. Add more detailed examples for any section?
2. Create a step-by-step guide for a specific feature?
3. Explain any concepts in more detail?
4. Add more learning resources?