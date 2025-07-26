import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { formatSize } from '../lib/utils';

interface FileUploaderProps {
  file: File | null;
  onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ file, onFileSelect }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0] || null;
      onFileSelect?.(selectedFile);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize: 20 * 1024 * 1024,
  });

  return (
    <div className="w-full gradient-border">
      {/* Show uploaded file */}
      {file ? (
        <div className="uploader-selected-file flex items-center justify-between px-4 py-2  rounded bg-white">
          <div className="flex items-center space-x-3">
            <img src="/images/pdf.png" alt="pdf" className="size-10" />
            <div>
              <p className="text-sm text-gray-700 font-medium truncate max-w-xs">{file.name}</p>
              <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
            </div>
          </div>
          <button
            type="button"
            className="p-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFileSelect?.(null);
            }}
          >
            <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
          </button>
        </div>
      ) : (
        // Only render dropzone when no file is selected
        <div {...getRootProps()} >
          <input {...getInputProps()} />
          <div className="space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
              <img src="/icons/info.svg" alt="upload" className="size-20" />
            </div>
            <p className="text-lg text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-lg text-gray-500">(max 20 mb)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;

