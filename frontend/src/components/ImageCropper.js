import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageCropper.css';

const ImageCropper = ({ imageFile, onCropComplete, onCancel, aspectRatio = 450 / 350 }) => {
  const [crop, setCrop] = useState({
    unit: '%',
    width: 90,
    aspect: aspectRatio,
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  React.useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);

  const handleCropComplete = async () => {
    if (!imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = 450;
    canvas.height = 350;
    const ctx = canvas.getContext('2d');

    if (completedCrop) {
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      ctx.drawImage(
        image,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        450,
        350
      );
    } else {
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const targetRatio = 450 / 350;
      const imageRatio = image.naturalWidth / image.naturalHeight;
      
      let sx = 0, sy = 0, sw = image.naturalWidth, sh = image.naturalHeight;
      
      if (imageRatio > targetRatio) {
        sw = image.naturalHeight * targetRatio;
        sx = (image.naturalWidth - sw) / 2;
      } else {
        sh = image.naturalWidth / targetRatio;
        sy = (image.naturalHeight - sh) / 2;
      }
      
      ctx.drawImage(image, sx, sy, sw, sh, 0, 0, 450, 350);
    }

    canvas.toBlob((blob) => {
      if (blob) {
        onCropComplete(blob);
      }
    }, 'image/jpeg', 0.95);
  };

  return (
    <div className="image-cropper-modal">
      <div className="image-cropper-content">
        <h3>Crop Image</h3>
        <p>Adjust the crop area to fit the image (450x350 ratio)</p>
        {imageSrc && (
          <div className="crop-container">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspectRatio}
            >
              <img
                ref={imgRef}
                src={imageSrc}
                alt="Crop preview"
                style={{ maxWidth: '100%' }}
              />
            </ReactCrop>
          </div>
        )}
        <div className="crop-actions">
          <button onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button onClick={handleCropComplete} className="crop-btn">
            Crop & Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;

