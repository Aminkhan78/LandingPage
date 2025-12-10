# Complete VS Code Setup Guide - From Basics

This guide will help you set up and run this project in VS Code from scratch, even if you're a beginner.

## ⚠️ IMPORTANT: About "Cannot GET /" Error

If you see **"Cannot GET /"** error, it means you're accessing the **BACKEND** (http://localhost:5000) directly in your browser. 

**The backend is an API server, NOT a website!**

- ❌ **WRONG:** http://localhost:5000 (Backend - API only)
- ✅ **CORRECT:** http://localhost:3000 (Frontend - Website)

Always access the **FRONTEND** (port 3000) in your browser!

## Prerequisites

Before starting, make sure you have these installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS version
   - During installation, make sure to check "Add to PATH"
   - Verify installation: Open Command Prompt and type `node --version`

2. **VS Code** (Visual Studio Code)
   - Download from: https://code.visualstudio.com/
   - Install it normally

3. **MongoDB** (Choose one option):
   - **Option A - MongoDB Atlas (Recommended - Free Cloud Database)**
     - Go to https://www.mongodb.com/cloud/atlas
     - Sign up for free account
     - Create a free cluster (M0)
     - We'll set this up later
   
   - **Option B - Local MongoDB**
     - Download from: https://www.mongodb.com/try/download/community
     - Install MongoDB Community Edition
     - Make sure MongoDB service is running

## Step-by-Step Setup

### Step 1: Open Project in VS Code

1. Open VS Code
2. Click `File` → `Open Folder`
3. Navigate to your project folder: `A:\MinorProject\LandingPage`
4. Click `Select Folder`

You should now see your project files in the left sidebar.

### Step 2: Install VS Code Extensions (Optional but Recommended)

1. Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X`)
2. Search and install these extensions:
   - **ES7+ React/Redux/React-Native snippets**
   - **Prettier - Code formatter**
   - **ESLint**
   - **MongoDB for VS Code** (if using MongoDB)

### Step 3: Open Integrated Terminal

VS Code has a built-in terminal. You'll need TWO terminals running simultaneously:

**Method 1: Using Menu**
- Click `Terminal` → `New Terminal`
- This opens a terminal at the bottom

**Method 2: Using Keyboard**
- Press `` Ctrl + ` `` (backtick key, usually above Tab)
- Or press `Ctrl+Shift+` ``

### Step 4: Backend Setup

1. In the terminal, navigate to backend folder:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```
   Wait for installation to complete (may take 2-3 minutes)

3. Create `.env` file:
   - In VS Code, right-click on `backend` folder
   - Select `New File`
   - Name it exactly: `.env` (with the dot at the beginning)
   - Add this content:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/landingpage
     ```
   
   **If using MongoDB Atlas**, replace the MONGODB_URI with your connection string:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/landingpage?retryWrites=true&w=majority
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   
   You should see:
   ```
   MongoDB Connected
   Server running on port 5000
   ```
   
   **Keep this terminal running!** Don't close it.

### Step 5: Frontend Setup (New Terminal)

1. Open a **NEW** terminal:
   - Click `Terminal` → `New Terminal` (or press `` Ctrl + Shift + ` ``)
   - This opens a second terminal

2. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

3. Install frontend dependencies:
   ```bash
   npm install
   ```
   Wait for installation to complete (may take 3-5 minutes)

4. Create `.env` file:
   - In VS Code, right-click on `frontend` folder
   - Select `New File`
   - Name it exactly: `.env`
   - Add this content:
     ```
     REACT_APP_API_URL=http://localhost:5000/api
     ```

5. Start the frontend server:
   ```bash
   npm start
   ```
   
   This will automatically open your browser at `http://localhost:3000`
   
   **Keep this terminal running too!**

### Step 6: Verify Everything is Working

You should now have:
- ✅ Backend running on port 5000 (first terminal)
- ✅ Frontend running on port 3000 (second terminal)
- ✅ Browser opened automatically showing the landing page

## Running the Application

### To Access:
- **Landing Page**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

### To Stop:
- Press `Ctrl+C` in each terminal to stop the servers

### To Restart:
- Just run `npm start` again in each folder

## VS Code Tips & Tricks

### 1. Split Terminal View
- Right-click on terminal tab → `Split Terminal`
- This lets you see both backend and frontend terminals side by side

### 2. Run Scripts Easily
- Open `package.json` files
- You'll see a "Run Script" link above each script
- Click it to run without typing commands

### 3. Debugging
- Click the Debug icon in left sidebar (or press `F5`)
- Create launch configurations for Node.js debugging

### 4. Git Integration
- VS Code has built-in Git support
- Click the Source Control icon (left sidebar) to see changes
- Stage, commit, and push directly from VS Code

## Common Issues & Solutions

### Issue 1: "npm is not recognized"
**Solution**: Node.js is not installed or not in PATH
- Reinstall Node.js
- Restart VS Code
- Restart your computer if needed

### Issue 2: "Port 5000 already in use"
**Solution**: Another application is using port 5000
- Change PORT in `backend/.env` to `5001`
- Update `REACT_APP_API_URL` in `frontend/.env` to `http://localhost:5001/api`

### Issue 3: "MongoDB connection error"
**Solution**: MongoDB is not running
- If using local MongoDB: Start MongoDB service
- If using Atlas: Check your connection string and IP whitelist

### Issue 4: "Module not found"
**Solution**: Dependencies not installed
- Run `npm install` again in the respective folder
- Delete `node_modules` folder and `package-lock.json`, then run `npm install`

### Issue 5: Frontend not connecting to backend
**Solution**: Check `.env` file
- Make sure `REACT_APP_API_URL` is correct
- Restart frontend server after changing `.env`

## MongoDB Atlas Setup (If Using Cloud Database)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up/login
3. Click "Build a Database" → Choose "FREE" (M0)
4. Select a cloud provider and region (closest to you)
5. Create cluster (takes 3-5 minutes)
6. Click "Connect" → "Connect your application"
7. Copy the connection string
8. Replace `<password>` with your database user password
9. Replace `<dbname>` with `landingpage`
10. Add your IP address:
    - Click "Network Access" → "Add IP Address"
    - Click "Allow Access from Anywhere" (for development)
    - Or add your specific IP
11. Paste the connection string in `backend/.env`

## Project Structure Overview

```
LandingPage/
├── backend/              ← Backend code (Node.js)
│   ├── models/          ← Database models
│   ├── routes/          ← API endpoints
│   ├── server.js        ← Main server file
│   └── .env            ← Backend configuration
│
├── frontend/            ← Frontend code (React)
│   ├── src/
│   │   ├── components/ ← React components
│   │   └── App.js      ← Main app file
│   └── .env           ← Frontend configuration
│
└── README.md           ← Project documentation
```

## Quick Commands Reference

### Backend Terminal:
```bash
cd backend
npm install          # Install dependencies (first time only)
npm start           # Start server
npm run dev         # Start with auto-reload (if nodemon installed)
```

### Frontend Terminal:
```bash
cd frontend
npm install          # Install dependencies (first time only)
npm start           # Start development server
npm run build       # Build for production
```

## Next Steps

1. ✅ Backend and Frontend are running
2. ✅ Visit http://localhost:3000 to see landing page
3. ✅ Visit http://localhost:3000/admin to access admin panel
4. ✅ Add some projects and clients from admin panel
5. ✅ Test contact form and newsletter subscription

## Getting Help

If you encounter issues:
1. Check the terminal for error messages
2. Verify all `.env` files are created correctly
3. Make sure both servers are running
4. Check MongoDB connection
5. Restart VS Code and try again

## Additional Resources

- Node.js Docs: https://nodejs.org/docs/
- React Docs: https://react.dev/
- VS Code Docs: https://code.visualstudio.com/docs
- MongoDB Docs: https://docs.mongodb.com/

Happy Coding! 🚀

