const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function cropImage(inputPath, outputPath, width = 450, height = 350) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    
    const targetRatio = width / height;
    const originalRatio = originalWidth / originalHeight;
    
    let cropWidth, cropHeight, left, top;
    
    if (originalRatio > targetRatio) {
      cropHeight = originalHeight;
      cropWidth = Math.round(originalHeight * targetRatio);
      left = Math.round((originalWidth - cropWidth) / 2);
      top = 0;
    } else {
      cropWidth = originalWidth;
      cropHeight = Math.round(originalWidth / targetRatio);
      left = 0;
      top = Math.round((originalHeight - cropHeight) / 2);
    }
    
    await sharp(inputPath)
      .extract({
        left: left,
        top: top,
        width: cropWidth,
        height: cropHeight
      })
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(outputPath);
    
    if (fs.existsSync(inputPath) && inputPath !== outputPath) {
      fs.unlinkSync(inputPath);
    }
    
    return outputPath;
  } catch (error) {
    console.error('Error cropping image:', error);
    throw error;
  }
}

module.exports = { cropImage };

