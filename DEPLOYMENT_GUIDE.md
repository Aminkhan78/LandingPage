# 🚀 Complete Deployment Guide

## Deployment Platforms Selected

- **Backend:** Render.com (Free Tier)
- **Frontend:** Netlify (Free Tier)
- **Database:** MongoDB Atlas (Free Tier)

All platforms offer free tiers perfect for your assignment!

---

## 📋 Prerequisites

Before deploying, make sure you have:
- [ ] GitHub account (you have: https://github.com/Aminkhan78)
- [ ] GitHub repository created (upload your project first)
- [ ] MongoDB Atlas account (free)
- [ ] Email account for platform signups

---

## Part 1: MongoDB Atlas Setup (Database)

### Step 1: Create MongoDB Atlas Account

1. **Go to:** https://www.mongodb.com/cloud/atlas/register
2. **Sign up** with your email (aminkhan6265@gmail.com)
3. **Choose:** Free tier (M0 Sandbox)
4. **Complete** the registration

### Step 2: Create Cluster

1. **Click:** "Build a Database"
2. **Choose:** FREE (M0 Sandbox)
3. **Cloud Provider:** AWS (or any)
4. **Region:** Choose closest to you (e.g., Mumbai for India)
5. **Cluster Name:** Leave default or name it "LandingPage"
6. **Click:** "Create Cluster"
7. **Wait:** 3-5 minutes for cluster creation

### Step 3: Create Database User

1. **Click:** "Database Access" (left sidebar)
2. **Click:** "Add New Database User"
3. **Authentication Method:** Password
4. **Username:** `landingpage_user` (or any name)
5. **Password:** Create a strong password (SAVE IT!)
6. **Database User Privileges:** Read and write to any database
7. **Click:** "Add User"

### Step 4: Whitelist IP Address

1. **Click:** "Network Access" (left sidebar)
2. **Click:** "Add IP Address"
3. **Click:** "Allow Access from Anywhere" (for development)
   - Or add specific IPs: `0.0.0.0/0`
4. **Click:** "Confirm"

### Step 5: Get Connection String

1. **Click:** "Clusters" → Click "Connect" on your cluster
2. **Choose:** "Connect your application"
3. **Driver:** Node.js
4. **Version:** 5.5 or later
5. **Copy** the connection string
   - Looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
6. **Replace:**
   - `<username>` → Your database username
   - `<password>` → Your database password
   - `?` → `/landingpage?` (before the question mark)
7. **Final string:**
   ```
   mongodb+srv://landingpage_user:yourpassword@cluster0.xxxxx.mongodb.net/landingpage?retryWrites=true&w=majority
   ```
8. **SAVE THIS STRING!** You'll need it for backend deployment

---

## Part 2: Backend Deployment (Render.com)

### Step 1: Create Render Account

1. **Go to:** https://render.com
2. **Click:** "Get Started for Free"
3. **Sign up** with GitHub (recommended) or email
4. **Verify** your email if needed

### Step 2: Connect GitHub Repository

1. **In Render dashboard**, click "New" → "Web Service"
2. **Connect** your GitHub account (if not connected)
3. **Select** your repository: `LandingPage`
4. **Click:** "Connect"

### Step 3: Configure Backend Service

**Service Settings:**

- **Name:** `landingpage-backend` (or any name)
- **Region:** Choose closest to you
- **Branch:** `main` (or your main branch)
- **Root Directory:** `backend`
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Environment:** `Node`

### Step 4: Add Environment Variables

**Click "Add Environment Variable" and add:**

```
Key: PORT
Value: 10000
```

```
Key: MONGODB_URI
Value: mongodb+srv://landingpage_user:yourpassword@cluster0.xxxxx.mongodb.net/landingpage?retryWrites=true&w=majority
```
(Use your actual MongoDB connection string from Part 1)

### Step 5: Deploy

1. **Click:** "Create Web Service"
2. **Wait:** 5-10 minutes for deployment
3. **Check:** Build logs for any errors
4. **Copy:** Your service URL (looks like: `https://landingpage-backend.onrender.com`)

**✅ Backend deployed!** Save this URL - you'll need it for frontend.

---

## Part 3: Frontend Deployment (Netlify)

### Step 1: Create Netlify Account

1. **Go to:** https://www.netlify.com
2. **Click:** "Sign up"
3. **Sign up** with GitHub (recommended)
4. **Authorize** Netlify to access GitHub

### Step 2: Connect Repository

1. **Click:** "Add new site" → "Import an existing project"
2. **Choose:** "Deploy with GitHub"
3. **Select** your repository: `LandingPage`
4. **Click:** "Connect"

### Step 3: Configure Frontend Build

**Build Settings:**

- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `frontend/build`
- **Branch to deploy:** `main`

### Step 4: Add Environment Variables

**Click "Show advanced" → "New variable" and add:**

```
Key: REACT_APP_API_URL
Value: https://landingpage-backend.onrender.com/api
```
(Use your actual Render backend URL from Part 2)

### Step 5: Deploy

1. **Click:** "Deploy site"
2. **Wait:** 3-5 minutes for build and deployment
3. **Check:** Deploy logs for any errors
4. **Copy:** Your site URL (looks like: `https://landingpage.netlify.app`)

**✅ Frontend deployed!**

---

## Part 4: Update CORS Settings

### Update Backend CORS (Render)

1. **Go to:** Render dashboard → Your backend service
2. **Click:** "Environment"
3. **Add new variable:**

```
Key: CORS_ORIGIN
Value: https://landingpage.netlify.app
```
(Use your actual Netlify frontend URL)

4. **Update** `backend/server.js` to use this:

```javascript
const cors = require('cors');
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
```

5. **Commit and push** changes to GitHub
6. **Render will auto-deploy** the update

---

## ✅ Verification

### Test Your Deployment

1. **Frontend:** Visit your Netlify URL
   - Should load the landing page
   - Should connect to backend

2. **Backend:** Visit `https://your-backend-url.onrender.com/api/health`
   - Should return: `{"status":"OK","message":"Server is running"}`

3. **Test Features:**
   - Add project from admin panel
   - Add client from admin panel
   - Submit contact form
   - Subscribe to newsletter

---

## 🔗 Your Deployment URLs

After deployment, you'll have:

- **Frontend:** `https://landingpage.netlify.app`
- **Backend:** `https://landingpage-backend.onrender.com`
- **Admin Panel:** `https://landingpage.netlify.app/admin`

---

## 📝 Important Notes

### Free Tier Limitations

**Render:**
- Free tier spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- Perfect for assignments and demos

**Netlify:**
- 100GB bandwidth/month
- Unlimited builds
- Perfect for frontend hosting

**MongoDB Atlas:**
- 512MB storage (free)
- Shared cluster
- Perfect for development/testing

### Updating Your Deployment

**After making code changes:**

1. **Commit and push** to GitHub
2. **Render** will auto-deploy backend
3. **Netlify** will auto-deploy frontend
4. **Wait** 3-5 minutes for updates

---

## 🆘 Troubleshooting

### Backend Not Working

1. **Check Render logs** for errors
2. **Verify** MongoDB connection string
3. **Check** environment variables
4. **Verify** PORT is set to 10000

### Frontend Not Connecting

1. **Check** REACT_APP_API_URL is correct
2. **Verify** backend URL is accessible
3. **Check** CORS settings
4. **Check** browser console for errors

### Database Connection Issues

1. **Verify** MongoDB Atlas IP whitelist
2. **Check** connection string format
3. **Verify** username/password
4. **Check** database name in connection string

---

## 🎉 Success!

Your project is now live on the internet!

**Share these URLs for your assignment:**
- Frontend: `https://landingpage.netlify.app`
- Backend: `https://landingpage-backend.onrender.com`
- GitHub: `https://github.com/Aminkhan78/LandingPage`

---

## 📚 Quick Reference

| Platform | URL | Purpose |
|----------|-----|---------|
| MongoDB Atlas | https://cloud.mongodb.com | Database |
| Render | https://render.com | Backend Hosting |
| Netlify | https://netlify.com | Frontend Hosting |
| GitHub | https://github.com | Code Repository |

---

**Need help?** Check the detailed guides or platform documentation.

