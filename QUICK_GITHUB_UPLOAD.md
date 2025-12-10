# ⚡ Quick GitHub Upload (5 Minutes)

## Fast Steps to Upload Your Project

### 1. Open Command Prompt/PowerShell
```bash
cd A:\MinorProject\LandingPage
```

### 2. Configure Git (First Time Only)
```bash
git config --global user.name "Aminkhan78"
git config --global user.email "aminkhan6265@gmail.com"
```

### 3. Initialize and Push
```bash
git init
git add .
git commit -m "Initial commit: Full stack landing page with admin panel"
```

### 4. Create Repository on GitHub
1. Go to: https://github.com/new
2. Repository name: `LandingPage`
3. Description: "Full stack landing page with admin panel"
4. Choose Public or Private
5. **Don't** check "Initialize with README"
6. Click "Create repository"

### 5. Connect and Push
```bash
git remote add origin https://github.com/Aminkhan78/LandingPage.git
git branch -M main
git push -u origin main
```

**When asked for password:** Use Personal Access Token (not your GitHub password)

### 6. Get Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Check `repo` permission
4. Generate and copy token
5. Use token as password when pushing

---

## ✅ Done!

Your project is now at: **https://github.com/Aminkhan78/LandingPage**

For detailed instructions, see **GITHUB_UPLOAD_GUIDE.md**

