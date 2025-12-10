# 🚀 QUICK START GUIDE

## The "Cannot GET /" Error Explained

**❌ WRONG:** Going to http://localhost:5000 in browser
- This is the BACKEND (API server)
- It only serves data, not a website
- That's why you see "Cannot GET /"

**✅ CORRECT:** Going to http://localhost:3000 in browser
- This is the FRONTEND (website)
- This is what users see
- This connects to backend automatically

---

## ⚡ Quick Setup (5 Minutes)

### 1. Open VS Code
- File → Open Folder → Select `LandingPage` folder

### 2. Terminal 1 - Backend
```bash
cd backend
npm install
# Create .env file with:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/landingpage
npm start
```
✅ Should see: "Server running on port 5000"

### 3. Terminal 2 - Frontend (NEW TERMINAL)
```bash
cd frontend
npm install
# Create .env file with:
# REACT_APP_API_URL=http://localhost:5000/api
npm start
```
✅ Browser opens automatically at http://localhost:3000

---

## 📍 Important URLs

| What | URL | When to Use |
|------|-----|-------------|
| **Landing Page** | http://localhost:3000 | ✅ View website |
| **Admin Panel** | http://localhost:3000/admin | ✅ Manage content |
| **Backend API** | http://localhost:5000/api | ❌ Don't access directly |

---

## ✅ Success Checklist

- [ ] Backend terminal shows "Server running on port 5000"
- [ ] Frontend terminal shows "Compiled successfully"
- [ ] Browser shows landing page at http://localhost:3000
- [ ] Can access admin panel at http://localhost:3000/admin

---

## 🆘 Quick Fixes

**Problem:** "Cannot GET /"
- **Solution:** Use http://localhost:3000 (not 5000)

**Problem:** Blank page
- **Solution:** Check both terminals are running

**Problem:** Images not loading
- **Solution:** Make sure backend is running (Terminal 1)

**Problem:** "Module not found"
- **Solution:** Run `npm install` in both folders

---

For detailed instructions, see **COMPLETE_SETUP_GUIDE.md**

