import React, { useState } from "react";
import { Image } from "@chakra-ui/react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ImageEditor({ srcImg, setCroppedImage }: any) {
  const [crop, setCrop] = useState<Crop>({
    unit: "%", // Can be 'px' or '%'
    x: 2,
    y: 10,
    width: 96,
    height: 80,
  });

  const getCroppedImg = (crop: any) => {
    const canvas = document.createElement("canvas");
    const img = document.createElement("img");
    img.src = srcImg;

    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const context = canvas.getContext("2d");

    if (context) {
      context.drawImage(
        img,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
    }

    const croppedImg = canvas.toDataURL();
    setCroppedImage(croppedImg);
  };

  return (
    <ReactCrop
      crop={crop}
      ruleOfThirds
      onComplete={(crop) => getCroppedImg(crop)}
      onChange={(cropData) => setCrop(cropData)}
    >
      <Image alt="Crop image" src={srcImg} />
    </ReactCrop>
  );
}
