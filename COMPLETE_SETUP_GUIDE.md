# COMPLETE SETUP GUIDE - Full Stack Application

This is a **COMPLETE** guide to run the entire project from scratch. Follow every step carefully.

## ⚠️ IMPORTANT: Understanding the Error

If you see **"Cannot GET /"** error, it means:
- You're accessing the **BACKEND URL** (http://localhost:5000) directly in browser
- The backend is an API server, NOT a website
- You need to access the **FRONTEND URL** (http://localhost:3000) instead

**Backend (Port 5000)** = API Server (for data)
**Frontend (Port 3000)** = Website (what users see)

---

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] **Node.js** installed (v14 or higher)
  - Check: Open Command Prompt → Type `node --version`
  - Download: https://nodejs.org/ (Choose LTS version)

- [ ] **VS Code** installed
  - Download: https://code.visualstudio.com/

- [ ] **MongoDB** set up
  - Option A: MongoDB Atlas (Free cloud database) - Recommended
  - Option B: Local MongoDB installation

---

## 🚀 STEP-BY-STEP SETUP

### STEP 1: Open Project in VS Code

1. Open **VS Code**
2. Click **File** → **Open Folder**
3. Navigate to: `A:\MinorProject\LandingPage`
4. Click **Select Folder**

You should see your project files in the left sidebar.

---

### STEP 2: Backend Setup (Terminal 1)

#### 2.1 Open Terminal
- Press `` Ctrl + ` `` (backtick key) OR
- Click **Terminal** → **New Terminal**

#### 2.2 Navigate to Backend
```bash
cd backend
```

#### 2.3 Install Dependencies
```bash
npm install
```
**Wait for installation** (2-3 minutes). You'll see packages being installed.

#### 2.4 Create .env File

**Method 1: Using VS Code**
1. In VS Code, click on `backend` folder in left sidebar
2. Right-click → **New File**
3. Name it exactly: `.env` (with the dot!)
4. Copy and paste this content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/landingpage
```

**If using MongoDB Atlas**, replace with:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/landingpage?retryWrites=true&w=majority
```

**Method 2: Using Terminal**
```bash
echo PORT=5000 > .env
echo MONGODB_URI=mongodb://localhost:27017/landingpage >> .env
```

#### 2.5 Start Backend Server
```bash
npm start
```

**✅ You should see:**
```
MongoDB Connected
Server running on port 5000
```

**⚠️ KEEP THIS TERMINAL OPEN!** Don't close it. The backend must keep running.

---

### STEP 3: Frontend Setup (Terminal 2)

#### 3.1 Open NEW Terminal
- Click **Terminal** → **New Terminal** (or press `` Ctrl + Shift + ` ``)
- This opens a **second terminal** (you'll have 2 terminals now)

#### 3.2 Navigate to Frontend
```bash
cd frontend
```

#### 3.3 Install Dependencies
```bash
npm install
```
**Wait for installation** (3-5 minutes). This takes longer than backend.

#### 3.4 Create .env File

**Method 1: Using VS Code**
1. In VS Code, click on `frontend` folder in left sidebar
2. Right-click → **New File**
3. Name it exactly: `.env`
4. Copy and paste this content:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

**Method 2: Using Terminal**
```bash
echo REACT_APP_API_URL=http://localhost:5000/api > .env
```

#### 3.5 Start Frontend Server
```bash
npm start
```

**✅ You should see:**
- Terminal shows: "Compiled successfully!"
- Browser **automatically opens** at http://localhost:3000
- You see the landing page!

**⚠️ KEEP THIS TERMINAL OPEN TOO!** Both terminals must run simultaneously.

---

## ✅ VERIFICATION - Is Everything Working?

### Check Terminal 1 (Backend)
Should show:
```
MongoDB Connected
Server running on port 5000
```

### Check Terminal 2 (Frontend)
Should show:
```
Compiled successfully!
webpack compiled with 0 warnings
```

### Check Browser
- URL: http://localhost:3000
- You should see the **Landing Page** with header, hero section, etc.

### Test Backend API
Open a new browser tab and go to:
```
http://localhost:5000/api/health
```
You should see:
```json
{"status":"OK","message":"Server is running"}
```

---

## 🌐 Accessing the Application

### Landing Page
```
http://localhost:3000
```
- Shows projects section
- Shows clients section
- Contact form
- Newsletter subscription

### Admin Panel
```
http://localhost:3000/admin
```
- Manage projects
- Manage clients
- View contact submissions
- View newsletter subscriptions

---

## 🔧 Common Issues & Solutions

### Issue 1: "Cannot GET /" Error

**Problem:** You're accessing http://localhost:5000 directly

**Solution:**
- ❌ Don't go to http://localhost:5000
- ✅ Go to http://localhost:3000 (frontend)
- Backend (5000) is API only, Frontend (3000) is the website

### Issue 2: "npm is not recognized"

**Problem:** Node.js not installed or not in PATH

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Install it
3. Restart VS Code
4. Restart computer if needed

### Issue 3: "Port 5000 already in use"

**Problem:** Another app is using port 5000

**Solution:**
1. Change port in `backend/.env`:
   ```
   PORT=5001
   ```
2. Update `frontend/.env`:
   ```
   REACT_APP_API_URL=http://localhost:5001/api
   ```
3. Restart both servers

### Issue 4: "MongoDB connection error"

**Problem:** MongoDB not running or wrong connection string

**Solution:**
- **Local MongoDB:** Start MongoDB service
- **MongoDB Atlas:** Check connection string and IP whitelist

### Issue 5: Frontend shows blank page

**Problem:** Frontend not connecting to backend

**Solution:**
1. Check `frontend/.env` file exists and has correct URL
2. Make sure backend is running (Terminal 1)
3. Restart frontend server (Terminal 2)
4. Check browser console for errors (F12)

### Issue 6: "Module not found"

**Problem:** Dependencies not installed

**Solution:**
```bash
# In backend folder
cd backend
rm -rf node_modules package-lock.json
npm install

# In frontend folder
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Issue 7: Images not loading

**Problem:** Image URLs incorrect

**Solution:**
1. Make sure backend is running
2. Check `frontend/.env` has correct API URL
3. Images should be in `backend/uploads/` folder
4. Restart both servers

---

## 📁 Project Structure

```
LandingPage/
├── backend/                    ← Backend Server (Port 5000)
│   ├── models/                ← Database models
│   ├── routes/                ← API endpoints
│   ├── middleware/            ← Upload handling
│   ├── utils/                 ← Image cropping
│   ├── uploads/               ← Uploaded images (auto-created)
│   ├── server.js              ← Main server file
│   ├── .env                   ← Backend config (YOU CREATE THIS)
│   └── package.json
│
├── frontend/                   ← Frontend App (Port 3000)
│   ├── public/
│   ├── src/
│   │   ├── components/        ← React components
│   │   ├── config/            ← API configuration
│   │   ├── services/          ← API calls
│   │   └── App.js             ← Main app
│   ├── .env                   ← Frontend config (YOU CREATE THIS)
│   └── package.json
│
└── README.md
```

---

## 🎯 Quick Start Commands

### First Time Setup
```bash
# Terminal 1 - Backend
cd backend
npm install
# Create .env file (see Step 2.4)
npm start

# Terminal 2 - Frontend (NEW TERMINAL)
cd frontend
npm install
# Create .env file (see Step 3.4)
npm start
```

### Daily Use (After First Setup)
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend (NEW TERMINAL)
cd frontend
npm start
```

### Stop Servers
- Press `Ctrl+C` in each terminal

---

## 🗄️ MongoDB Atlas Setup (If Using Cloud Database)

### Step 1: Create Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with email

### Step 2: Create Cluster
1. Click "Build a Database"
2. Choose **FREE** (M0) tier
3. Select cloud provider (AWS, Google Cloud, or Azure)
4. Choose region closest to you
5. Click "Create Cluster"
6. Wait 3-5 minutes for cluster to be created

### Step 3: Create Database User
1. Click "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Enter username and password (SAVE THESE!)
5. Click "Add User"

### Step 4: Whitelist IP Address
1. Click "Network Access" (left sidebar)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
   - Or add your specific IP address
4. Click "Confirm"

### Step 5: Get Connection String
1. Click "Clusters" → Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. It looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` with your database username
6. Replace `<password>` with your database password
7. Replace `?` with `/landingpage?` (before the question mark)
8. Final string:
   ```
   mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/landingpage?retryWrites=true&w=majority
   ```

### Step 6: Update Backend .env
Update `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/landingpage?retryWrites=true&w=majority
```

---

## ✅ Testing Checklist

After setup, test these:

- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] Landing page loads (http://localhost:3000)
- [ ] Admin panel loads (http://localhost:3000/admin)
- [ ] Can add a project from admin panel
- [ ] Can add a client from admin panel
- [ ] Projects appear on landing page
- [ ] Clients appear on landing page
- [ ] Contact form submits successfully
- [ ] Newsletter subscription works
- [ ] Images upload and display correctly

---

## 🆘 Still Having Issues?

1. **Check both terminals are running**
   - Backend terminal should show "Server running on port 5000"
   - Frontend terminal should show "Compiled successfully"

2. **Verify .env files exist**
   - `backend/.env` should have PORT and MONGODB_URI
   - `frontend/.env` should have REACT_APP_API_URL

3. **Check MongoDB connection**
   - Test: http://localhost:5000/api/health
   - Should return JSON response

4. **Clear cache and restart**
   ```bash
   # Stop both servers (Ctrl+C)
   # Delete node_modules and reinstall
   cd backend
   rm -rf node_modules
   npm install
   
   cd ../frontend
   rm -rf node_modules
   npm install
   
   # Restart both servers
   ```

5. **Check browser console**
   - Press F12 in browser
   - Look for errors in Console tab

---

## 📝 Important Notes

1. **Always run BOTH servers** - Backend AND Frontend
2. **Don't close terminals** while using the app
3. **Backend = API** (port 5000) - Don't access directly in browser
4. **Frontend = Website** (port 3000) - This is what users see
5. **.env files are required** - Create them manually
6. **MongoDB must be running** - Either local or Atlas

---

## 🎉 Success!

If everything is working:
- ✅ Backend running on port 5000
- ✅ Frontend running on port 3000
- ✅ Landing page shows at http://localhost:3000
- ✅ Admin panel works at http://localhost:3000/admin

**You're all set!** Start adding projects and clients from the admin panel.

---

## 📞 Quick Reference

| What | URL | Purpose |
|------|-----|---------|
| Landing Page | http://localhost:3000 | User-facing website |
| Admin Panel | http://localhost:3000/admin | Admin dashboard |
| Backend API | http://localhost:5000/api | API endpoints |
| Health Check | http://localhost:5000/api/health | Test backend |

**Remember:** Always access the **FRONTEND** (port 3000) in your browser, not the backend (port 5000)!

---

Good luck! 🚀

