# ✅ Deployment Checklist

Use this checklist to ensure everything is deployed correctly.

---

## 📋 Pre-Deployment Checklist

- [ ] Project uploaded to GitHub
- [ ] GitHub repository is public (or Render/Netlify have access)
- [ ] All code is committed and pushed
- [ ] `.env` files are NOT in repository (protected by .gitignore)

---

## 🗄️ MongoDB Atlas Checklist

- [ ] Account created at https://cloud.mongodb.com
- [ ] Free cluster (M0) created
- [ ] Database user created with username and password
- [ ] IP address whitelisted (0.0.0.0/0 for development)
- [ ] Connection string copied and formatted correctly
- [ ] Connection string tested (can connect)

**Connection String Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/landingpage?retryWrites=true&w=majority
```

---

## 🔧 Backend Deployment (Render) Checklist

- [ ] Render account created
- [ ] GitHub repository connected
- [ ] Web service created
- [ ] Root directory set to `backend`
- [ ] Build command: `npm install`
- [ ] Start command: `npm start`
- [ ] Environment variable `PORT` = `10000`
- [ ] Environment variable `MONGODB_URI` = (your connection string)
- [ ] Service deployed successfully
- [ ] Build logs show no errors
- [ ] Backend URL accessible (e.g., `https://your-backend.onrender.com/api/health`)

**Backend URL:** `https://____________________.onrender.com`

---

## 🎨 Frontend Deployment (Netlify) Checklist

- [ ] Netlify account created
- [ ] GitHub repository connected
- [ ] Site created
- [ ] Base directory: `frontend`
- [ ] Build command: `npm run build`
- [ ] Publish directory: `frontend/build`
- [ ] Environment variable `REACT_APP_API_URL` = `https://your-backend.onrender.com/api`
- [ ] Site deployed successfully
- [ ] Build logs show no errors
- [ ] Frontend URL accessible

**Frontend URL:** `https://____________________.netlify.app`

---

## 🔗 Post-Deployment Checklist

- [ ] Backend CORS updated with frontend URL
- [ ] Frontend can access backend API
- [ ] Landing page loads correctly
- [ ] Admin panel accessible at `/admin`
- [ ] Can add projects from admin panel
- [ ] Can add clients from admin panel
- [ ] Contact form submits successfully
- [ ] Newsletter subscription works
- [ ] Images upload and display correctly

---

## 🧪 Testing Checklist

### Frontend Tests
- [ ] Landing page loads
- [ ] Navigation works
- [ ] Projects section displays
- [ ] Clients section displays
- [ ] Contact form works
- [ ] Newsletter subscription works
- [ ] Admin panel accessible

### Backend Tests
- [ ] Health check endpoint works: `/api/health`
- [ ] Projects API works: `/api/projects`
- [ ] Clients API works: `/api/clients`
- [ ] Contact API works: `/api/contacts`
- [ ] Newsletter API works: `/api/newsletter`
- [ ] Image uploads work

### Integration Tests
- [ ] Frontend fetches projects from backend
- [ ] Frontend fetches clients from backend
- [ ] Form submissions reach backend
- [ ] Images load from backend
- [ ] Admin panel can add/edit/delete items

---

## 📝 URLs to Save

**For Assignment Submission:**

- **Frontend URL:** `https://____________________.netlify.app`
- **Backend URL:** `https://____________________.onrender.com`
- **Admin Panel:** `https://____________________.netlify.app/admin`
- **GitHub Repository:** `https://github.com/Aminkhan78/LandingPage`

---

## 🆘 Troubleshooting Checklist

If something doesn't work:

- [ ] Check Render build logs for backend errors
- [ ] Check Netlify build logs for frontend errors
- [ ] Verify MongoDB connection string
- [ ] Verify environment variables are set correctly
- [ ] Check CORS settings
- [ ] Verify backend is running (check Render dashboard)
- [ ] Check browser console for frontend errors
- [ ] Verify all URLs are correct

---

## ✅ Final Verification

Before submitting:

- [ ] All URLs are working
- [ ] All features are functional
- [ ] No errors in console/logs
- [ ] Images load correctly
- [ ] Forms submit successfully
- [ ] Admin panel works
- [ ] Responsive design works on mobile

---

## 🎉 Ready to Submit!

Once all checkboxes are checked, your project is ready for submission!

**Include these in your assignment:**
1. Frontend URL
2. Backend URL
3. GitHub repository URL
4. Brief deployment summary

---

**Good luck with your assignment!** 🚀

