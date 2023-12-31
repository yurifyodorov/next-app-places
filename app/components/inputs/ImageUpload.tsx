'use client';

import React, { useCallback } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
  let cloudinary: any;
}

const uploadPreset = "s00i7c3u";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

// FIXME: issue here -> Stop using deprecated @cld/icons. Use @clds/icon instead.
const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
  }) => {
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
  }, [onChange]);

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed
              border-2
              p-20
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus
              size={50}
            />
            <div className="font-semibold text-lg">
              Click to upload
            </div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <CldImage
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  );
}

export default ImageUpload;