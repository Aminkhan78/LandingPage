# ⚡ Quick Deployment Guide (15 Minutes)

## Fast Steps to Deploy Your Project

---

## Step 1: MongoDB Atlas (5 minutes)

1. **Sign up:** https://www.mongodb.com/cloud/atlas/register
2. **Create cluster:** Free tier (M0)
3. **Create user:** Database Access → Add User
4. **Whitelist IP:** Network Access → Allow from anywhere
5. **Get connection string:** Clusters → Connect → Connect your app
6. **Format:** `mongodb+srv://username:password@cluster.mongodb.net/landingpage?retryWrites=true&w=majority`

**Save the connection string!**

---

## Step 2: Deploy Backend on Render (5 minutes)

1. **Sign up:** https://render.com (use GitHub)
2. **New Web Service:** Connect your GitHub repo
3. **Settings:**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Environment Variables:**
   - `PORT` = `10000`
   - `MONGODB_URI` = (your connection string from Step 1)
5. **Deploy:** Click "Create Web Service"
6. **Wait:** 5-10 minutes
7. **Copy:** Your backend URL (e.g., `https://landingpage-backend.onrender.com`)

**Save the backend URL!**

---

## Step 3: Deploy Frontend on Netlify (5 minutes)

1. **Sign up:** https://www.netlify.com (use GitHub)
2. **New Site:** Import from GitHub → Select repo
3. **Build Settings:**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
4. **Environment Variables:**
   - `REACT_APP_API_URL` = `https://your-backend-url.onrender.com/api`
5. **Deploy:** Click "Deploy site"
6. **Wait:** 3-5 minutes
7. **Copy:** Your frontend URL (e.g., `https://landingpage.netlify.app`)

**Done!**

---

## ✅ Your Live URLs

- **Frontend:** `https://landingpage.netlify.app`
- **Backend:** `https://landingpage-backend.onrender.com`
- **Admin:** `https://landingpage.netlify.app/admin`

---

## 🔄 Update CORS

After frontend deploys, update backend CORS:

1. **Render Dashboard** → Your service → Environment
2. **Add:** `CORS_ORIGIN` = `https://your-frontend-url.netlify.app`
3. **Redeploy** (automatic)

---

## 📝 Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] IP whitelisted
- [ ] Connection string saved
- [ ] Backend deployed on Render
- [ ] Frontend deployed on Netlify
- [ ] CORS updated
- [ ] Everything working!

---

**For detailed instructions, see DEPLOYMENT_GUIDE.md**

