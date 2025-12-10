@echo off
echo ========================================
echo GitHub Upload Script for LandingPage
echo ========================================
echo.

echo Step 1: Configuring Git...
git config --global user.name "Aminkhan78"
git config --global user.email "aminkhan6265@gmail.com"
echo Git configured!
echo.

echo Step 2: Initializing Git repository...
git init
echo.

echo Step 3: Adding all files...
git add .
echo.

echo Step 4: Creating initial commit...
git commit -m "Initial commit: Full stack landing page with admin panel - RealTrust"
echo.

echo ========================================
echo IMPORTANT: Next Steps
echo ========================================
echo.
echo 1. Go to https://github.com/new
echo 2. Create a new repository named "LandingPage"
echo 3. DO NOT initialize with README
echo 4. Copy the repository URL
echo 5. Run these commands:
echo.
echo    git remote add origin https://github.com/Aminkhan78/LandingPage.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo Note: You'll need a Personal Access Token as password
echo Get it from: https://github.com/settings/tokens
echo.
echo ========================================
pause

