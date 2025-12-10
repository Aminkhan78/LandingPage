# 📸 How to Add Images to Your Project

## For Beginners - Simple Guide

### Option 1: Use Images from Admin Panel (Recommended)

**This is the EASIEST way!**

1. **Start your backend and frontend servers** (follow RUN_INSTRUCTIONS.md)

2. **Go to Admin Panel:**
   - Open: http://localhost:3000/admin

3. **Add Projects:**
   - Click "Projects" tab
   - Fill in Project Name and Description
   - Click "Choose File" and select an image from your computer
   - Crop the image (it will auto-crop to 450x350)
   - The image will be saved automatically

4. **Add Clients:**
   - Click "Clients" tab
   - Fill in Name, Designation, and Description
   - Click "Choose File" and select an image
   - Crop the image
   - Save

**That's it!** Images will appear on the landing page automatically.

---

### Option 2: Add Images Manually (Advanced)

If you want to add images directly to the project folder:

#### Step 1: Find the Uploads Folder

The images are stored in:
```
backend/uploads/
```

#### Step 2: Add Your Images

1. Copy your image files (JPG, PNG, etc.)
2. Paste them into the `backend/uploads/` folder
3. Make sure images are named clearly (e.g., `project1.jpg`, `client1.jpg`)

#### Step 3: Update Database

You'll need to add the image paths to your MongoDB database. This is more complex, so **Option 1 is recommended**.

---

## 📁 Where Images Are Stored

```
LandingPage/
└── backend/
    └── uploads/          ← Images go here
        ├── cropped-image-1234567890.jpg
        ├── cropped-image-1234567891.jpg
        └── ...
```

---

## 🖼️ Image Requirements

- **Format:** JPG, PNG, GIF
- **Size:** Any size (will be auto-cropped to 450x350)
- **Max File Size:** 5MB per image

---

## 💡 Tips

1. **Use Admin Panel** - It's the easiest way
2. **Good Image Names** - Use descriptive names like "house-project.jpg"
3. **Image Quality** - Use high-quality images for best results
4. **Image Size** - Large images will be automatically resized

---

## ❓ Troubleshooting

### Images Not Showing?

1. **Check backend is running** - Terminal 1 should show "Server running on port 5000"
2. **Check image path** - Images should be in `backend/uploads/`
3. **Check browser console** - Press F12, look for errors
4. **Restart servers** - Stop and restart both backend and frontend

### Can't Upload Images?

1. **Check file size** - Must be under 5MB
2. **Check file format** - Use JPG or PNG
3. **Check backend is running** - Must be running for uploads to work

---

## 🎯 Quick Steps Summary

1. Start both servers (backend + frontend)
2. Go to http://localhost:3000/admin
3. Click "Projects" or "Clients" tab
4. Fill in the form
5. Click "Choose File" and select image
6. Crop image (if needed)
7. Save
8. Check landing page - image should appear!

---

**That's it!** The admin panel makes it super easy to add images. No coding required! 🎉

