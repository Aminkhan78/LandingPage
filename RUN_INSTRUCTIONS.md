# 🎯 FINAL RUN INSTRUCTIONS

## Complete Step-by-Step Guide to Run the Project

---

## 📋 BEFORE YOU START

Make sure you have:
1. ✅ Node.js installed (`node --version` should work)
2. ✅ VS Code installed
3. ✅ MongoDB running (local or Atlas)

---

## 🚀 RUNNING IN VS CODE

### Step 1: Open Project
1. Open **VS Code**
2. **File** → **Open Folder**
3. Select: `A:\MinorProject\LandingPage`
4. Click **Select Folder**

### Step 2: Backend Setup

**Open Terminal 1:**
- Press `` Ctrl + ` `` OR
- **Terminal** → **New Terminal**

**Run these commands:**
```bash
cd backend
npm install
```

**Create `.env` file:**
- Right-click `backend` folder → **New File**
- Name: `.env`
- Content:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/landingpage
```

**Start backend:**
```bash
npm start
```

**✅ You should see:**
```
MongoDB Connected
Server running on port 5000
```

**⚠️ KEEP THIS TERMINAL OPEN!**

---

### Step 3: Frontend Setup

**Open NEW Terminal:**
- **Terminal** → **New Terminal** (or `` Ctrl + Shift + ` ``)
- This is Terminal 2

**Run these commands:**
```bash
cd frontend
npm install
```

**Create `.env` file:**
- Right-click `frontend` folder → **New File**
- Name: `.env`
- Content:
```
REACT_APP_API_URL=http://localhost:5000/api
```

**Start frontend:**
```bash
npm start
```

**✅ You should see:**
- Terminal: "Compiled successfully!"
- Browser opens automatically at http://localhost:3000

**⚠️ KEEP THIS TERMINAL OPEN TOO!**

---

## 🌐 ACCESSING THE APPLICATION

### ✅ Landing Page (Main Website)
```
http://localhost:3000
```
- Shows projects
- Shows clients
- Contact form
- Newsletter subscription

### ✅ Admin Panel
```
http://localhost:3000/admin
```
- Add/edit projects
- Add/edit clients
- View contact submissions
- View newsletter subscriptions

### ❌ Backend API (Don't Access Directly)
```
http://localhost:5000
```
**This will show "Cannot GET /" - This is NORMAL!**
The backend is an API server, not a website.

---

## 🔍 VERIFICATION

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
- Should see landing page with header, sections, etc.

### Test Backend
Open new browser tab:
```
http://localhost:5000/api/health
```
Should see:
```json
{"status":"OK","message":"Server is running"}
```

---

## 🛑 STOPPING THE SERVERS

To stop:
1. Click on Terminal 1
2. Press `Ctrl+C`
3. Click on Terminal 2
4. Press `Ctrl+C`

---

## 🔄 RESTARTING

To restart:
1. Stop both servers (Ctrl+C)
2. Terminal 1: `cd backend` → `npm start`
3. Terminal 2: `cd frontend` → `npm start`

---

## 🆘 TROUBLESHOOTING

### Problem: "Cannot GET /"
**Cause:** Accessing backend URL directly
**Solution:** Use http://localhost:3000 (frontend)

### Problem: Blank page
**Cause:** Frontend not connecting to backend
**Solution:**
1. Check both terminals are running
2. Verify `.env` files exist
3. Restart both servers

### Problem: Images not loading
**Cause:** Backend not running or wrong URL
**Solution:**
1. Make sure backend is running (Terminal 1)
2. Check `frontend/.env` has correct URL
3. Restart frontend

### Problem: "Module not found"
**Cause:** Dependencies not installed
**Solution:**
```bash
cd backend
npm install

cd ../frontend
npm install
```

---

## 📝 IMPORTANT NOTES

1. **Always run BOTH servers** - Backend AND Frontend
2. **Don't close terminals** while using the app
3. **Backend = API** (port 5000) - Don't access in browser
4. **Frontend = Website** (port 3000) - This is what users see
5. **.env files are required** - Create them manually

---

## ✅ SUCCESS INDICATORS

You know it's working when:
- ✅ Backend terminal shows "Server running on port 5000"
- ✅ Frontend terminal shows "Compiled successfully"
- ✅ Browser shows landing page at http://localhost:3000
- ✅ Can navigate to admin panel
- ✅ Can add projects/clients from admin
- ✅ Projects/clients appear on landing page

---

## 🎉 YOU'RE DONE!

If everything is working:
1. ✅ Backend running (Terminal 1)
2. ✅ Frontend running (Terminal 2)
3. ✅ Landing page loads
4. ✅ Admin panel works

**Start using the application!**

---

For detailed troubleshooting, see **COMPLETE_SETUP_GUIDE.md**

