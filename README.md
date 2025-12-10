# Landing Page & Admin Panel - Full Stack Application

A full-stack application consisting of a landing page and an admin panel for managing projects, clients, contact forms, and newsletter subscriptions.

## Features

### Landing Page
- **Our Projects Section**: Displays all projects fetched from the backend with images, names, descriptions, and a "Read More" button
- **Happy Clients Section**: Shows client testimonials with images, descriptions, names, and designations
- **Contact Form**: Allows users to submit contact information (Full Name, Email, Mobile Number, City)
- **Newsletter Subscription**: Users can subscribe to the newsletter by entering their email address

### Admin Panel
- **Project Management**: Add and delete projects with image upload and cropping (450x350 ratio)
- **Client Management**: Add and delete clients with image upload and cropping (450x350 ratio)
- **Contact Form Details**: View all contact form submissions in a table format
- **Newsletter Subscriptions**: View all subscribed email addresses

### Additional Features
- **Image Cropping**: Automatic image cropping to 450x350 ratio when uploading images in the admin panel
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (File upload)
- Sharp (Image processing)

### Frontend
- React
- React Router
- Axios
- React Image Crop
- CSS3

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd LandingPage
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/landingpage
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/landingpage?retryWrites=true&w=majority
```

Start the backend server:

```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Project Structure

```
LandingPage/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Express middleware
│   ├── utils/           # Utility functions
│   ├── uploads/         # Uploaded images (created automatically)
│   ├── server.js        # Main server file
│   └── package.json
├── frontend/
│   ├── public/          # Public assets
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── config/      # Configuration files
│   │   ├── services/    # API service functions
│   │   ├── App.js       # Main App component
│   │   └── index.js     # Entry point
│   └── package.json
└── README.md
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

## Usage

1. **Access Landing Page**: Navigate to `http://localhost:3000`
2. **Access Admin Panel**: Navigate to `http://localhost:3000/admin`

### Admin Panel Workflow

1. **Add Projects**:
   - Go to "Projects" tab
   - Fill in project name and description
   - Upload an image
   - Crop the image to desired area (450x350 ratio)
   - Click "Crop & Save"

2. **Add Clients**:
   - Go to "Clients" tab
   - Fill in client name, designation, and description
   - Upload an image
   - Crop the image to desired area (450x350 ratio)
   - Click "Crop & Save"

3. **View Contact Forms**:
   - Go to "Contact Forms" tab
   - View all submitted contact forms

4. **View Newsletter Subscriptions**:
   - Go to "Newsletter" tab
   - View all subscribed email addresses

## Deployment

### Backend Deployment

1. **Heroku**:
   ```bash
   cd backend
   heroku create your-app-name
   heroku config:set MONGODB_URI=your_mongodb_uri
   git push heroku main
   ```

2. **AWS/Google Cloud/Azure**:
   - Follow platform-specific Node.js deployment guides
   - Set environment variables for `PORT` and `MONGODB_URI`
   - Ensure `uploads` directory is writable

### Frontend Deployment

1. **Build the React app**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify/Vercel**:
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Add environment variable: `REACT_APP_API_URL` (your backend URL)

3. **Update API URL**:
   - Update `REACT_APP_API_URL` in frontend `.env` to point to your deployed backend
   - Rebuild and redeploy

### MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use `0.0.0.0/0` for development)
5. Get your connection string and update `MONGODB_URI` in backend `.env`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Notes

- Images are automatically cropped to 450x350 ratio when uploaded in the admin panel
- The `uploads` directory is created automatically when the server starts
- Make sure CORS is properly configured for production deployments
- Update the API URL in the frontend code if your backend is deployed to a different domain

## License

This project is created for assignment purposes.

