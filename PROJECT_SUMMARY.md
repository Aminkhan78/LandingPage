# Project Summary

## Overview
This is a full-stack web application built for a placement assignment. It consists of a landing page and an admin panel for managing content.

## Features Implemented

### ✅ Landing Page Features
1. **Our Projects Section**
   - Displays all projects from backend
   - Shows project image, name, and description
   - Includes "Read More" button (non-functional as per requirements)

2. **Happy Clients Section**
   - Displays all clients from backend
   - Shows client image, description, name, and designation
   - Responsive grid layout

3. **Contact Form**
   - Full Name input
   - Email Address input
   - Mobile Number input
   - City input
   - Submit button that sends data to backend
   - Success/error messages

4. **Newsletter Subscription**
   - Email input field
   - Subscribe button
   - Sends email to backend
   - Success/error messages

### ✅ Admin Panel Features
1. **Project Management**
   - Add new projects with:
     - Project name
     - Project description
     - Project image (with cropping)
   - View all projects in grid layout
   - Delete projects
   - Image cropping to 450x350 ratio

2. **Client Management**
   - Add new clients with:
     - Client name
     - Client designation (e.g., CEO, Web Developer, Designer)
     - Client description
     - Client image (with cropping)
   - View all clients in grid layout
   - Delete clients
   - Image cropping to 450x350 ratio

3. **Contact Form Details**
   - View all contact form submissions
   - Table format showing:
     - Full Name
     - Email Address
     - Mobile Number
     - City
     - Submission date

4. **Newsletter Subscriptions**
   - View all subscribed email addresses
   - Table format showing:
     - Email Address
     - Subscription date

### ✅ Additional Features (Bonus)
1. **Image Cropping**
   - Automatic cropping to 450x350 ratio
   - Interactive crop tool using react-image-crop
   - Works for both projects and clients
   - Backend also crops images using Sharp library

## Technical Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **Multer** - File upload handling
- **Sharp** - Image processing and cropping
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **React Router** - Routing
- **Axios** - HTTP client
- **React Image Crop** - Image cropping component
- **CSS3** - Styling

## Project Structure

```
LandingPage/
├── backend/
│   ├── models/          # MongoDB schemas
│   │   ├── Project.js
│   │   ├── Client.js
│   │   ├── Contact.js
│   │   └── Newsletter.js
│   ├── routes/          # API endpoints
│   │   ├── projects.js
│   │   ├── clients.js
│   │   ├── contacts.js
│   │   └── newsletter.js
│   ├── middleware/      # Express middleware
│   │   └── upload.js    # Multer configuration
│   ├── utils/          # Utility functions
│   │   └── imageCropper.js  # Sharp image cropping
│   ├── uploads/         # Uploaded images (auto-created)
│   ├── server.js        # Main server file
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.js
│   │   │   ├── LandingPage.css
│   │   │   ├── AdminPanel.js
│   │   │   ├── AdminPanel.css
│   │   │   ├── ImageCropper.js
│   │   │   └── ImageCropper.css
│   │   ├── config/
│   │   │   └── api.js   # API configuration
│   │   ├── services/
│   │   │   └── api.js   # API service functions
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── README.md           # Main documentation
├── SETUP.md           # Setup instructions
└── .gitignore
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (multipart/form-data)
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get single client
- `POST /api/clients` - Create client (multipart/form-data)
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Contacts
- `GET /api/contacts` - Get all contact submissions
- `POST /api/contacts` - Submit contact form
- `DELETE /api/contacts/:id` - Delete contact

### Newsletter
- `GET /api/newsletter` - Get all subscriptions
- `POST /api/newsletter` - Subscribe to newsletter
- `DELETE /api/newsletter/:id` - Delete subscription

## Database Schema

### Project
```javascript
{
  name: String (required),
  description: String (required),
  image: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Client
```javascript
{
  name: String (required),
  designation: String (required),
  description: String (required),
  image: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Contact
```javascript
{
  fullName: String (required),
  email: String (required),
  mobileNumber: String (required),
  city: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Newsletter
```javascript
{
  email: String (required, unique),
  createdAt: Date,
  updatedAt: Date
}
```

## Key Features & Highlights

1. **Image Processing**
   - Frontend cropping with react-image-crop
   - Backend processing with Sharp library
   - Automatic 450x350 ratio enforcement
   - Proper error handling

2. **Responsive Design**
   - Mobile-friendly layout
   - Grid system adapts to screen size
   - Touch-friendly interface

3. **Error Handling**
   - Form validation
   - API error handling
   - User-friendly error messages
   - Image upload error handling

4. **Code Quality**
   - Clean, organized code structure
   - Separation of concerns
   - Reusable components
   - Proper error handling

5. **User Experience**
   - Loading states
   - Success/error messages
   - Smooth transitions
   - Intuitive navigation

## Deployment Ready

The project is configured for deployment:
- Environment variables for configuration
- CORS enabled for cross-origin requests
- Static file serving for uploaded images
- Production build scripts
- MongoDB Atlas compatible

## Testing Checklist

- [x] Landing page displays projects correctly
- [x] Landing page displays clients correctly
- [x] Contact form submits successfully
- [x] Newsletter subscription works
- [x] Admin can add projects
- [x] Admin can add clients
- [x] Admin can view contact forms
- [x] Admin can view newsletter subscriptions
- [x] Image cropping works correctly
- [x] Images are cropped to 450x350 ratio
- [x] Responsive design works on mobile
- [x] Error handling works properly

## Notes

- The project follows all requirements from the assignment
- Image cropping is implemented both on frontend and backend
- The codebase is clean and well-organized
- All features are functional and tested
- Ready for deployment to cloud platforms
- Compatible with MongoDB Atlas free tier

