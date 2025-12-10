# Quick Setup Guide

## Step-by-Step Setup Instructions

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the content below and create .env file:
```

**Backend .env file content:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/landingpage
```

**For MongoDB Atlas (recommended for deployment):**
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/landingpage?retryWrites=true&w=majority
```

```bash
# Start backend server
npm start

# Or for development with auto-reload
npm run dev
```

Backend will run on: `http://localhost:5000`

### 2. Frontend Setup

Open a **new terminal window**:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
# Copy the content below and create .env file:
```

**Frontend .env file content:**
```
REACT_APP_API_URL=http://localhost:5000/api
```

```bash
# Start frontend development server
npm start
```

Frontend will run on: `http://localhost:3000`

### 3. Access the Application

- **Landing Page**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

### 4. Testing the Application

1. **Add a Project** (Admin Panel):
   - Go to http://localhost:3000/admin
   - Click on "Projects" tab
   - Fill in project name and description
   - Upload an image
   - Crop the image (450x350 ratio)
   - Click "Crop & Save"

2. **Add a Client** (Admin Panel):
   - Click on "Clients" tab
   - Fill in client name, designation, and description
   - Upload an image
   - Crop the image (450x350 ratio)
   - Click "Crop & Save"

3. **View on Landing Page**:
   - Go to http://localhost:3000
   - Scroll to see your projects and clients displayed

4. **Test Contact Form**:
   - Fill in the contact form on the landing page
   - Submit the form
   - Check admin panel "Contact Forms" tab to see the submission

5. **Test Newsletter**:
   - Enter email in newsletter section
   - Click Subscribe
   - Check admin panel "Newsletter" tab to see the subscription

## Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Make sure MongoDB is running (if using local MongoDB)
- Check your MongoDB Atlas connection string (if using Atlas)
- Verify network access in MongoDB Atlas (IP whitelist)

**Port Already in Use:**
- Change PORT in backend/.env to a different port (e.g., 5001)
- Update REACT_APP_API_URL in frontend/.env accordingly

### Frontend Issues

**Cannot connect to backend:**
- Make sure backend is running
- Check REACT_APP_API_URL in frontend/.env
- Verify CORS is enabled in backend (it should be by default)

**Images not loading:**
- Make sure backend is running
- Check that images are uploaded correctly
- Verify the API_BASE_URL configuration

### Image Upload Issues

**Image cropping not working:**
- Make sure you've installed all dependencies: `npm install` in frontend
- Check browser console for errors
- Ensure react-image-crop is installed

## MongoDB Atlas Setup (Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (free tier M0)
4. Create a database user:
   - Go to Database Access
   - Add New Database User
   - Choose Password authentication
   - Save username and password
5. Whitelist IP address:
   - Go to Network Access
   - Add IP Address
   - For development, use `0.0.0.0/0` (allows all IPs)
6. Get connection string:
   - Go to Clusters
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `landingpage`
7. Update backend/.env with the connection string

## Deployment Checklist

### Backend Deployment
- [ ] Set MONGODB_URI environment variable
- [ ] Set PORT environment variable (if needed)
- [ ] Ensure uploads directory is writable
- [ ] Test API endpoints

### Frontend Deployment
- [ ] Update REACT_APP_API_URL to production backend URL
- [ ] Run `npm run build`
- [ ] Deploy build folder
- [ ] Test all features

## Notes

- The `uploads` directory is created automatically when backend starts
- Images are automatically cropped to 450x350 ratio
- Make sure both backend and frontend are running simultaneously
- For production, update CORS settings in backend/server.js if needed

