import React, { useState, useRef } from 'react';
import { Upload, X, File, AlertCircle } from 'lucide-react';

interface VideoUploadProps {
  projectId: string;
  onUpload: (projectId: string, file: File) => void;
  onClose: () => void;
}

export function VideoUpload({ projectId, onUpload, onClose }: VideoUploadProps) {
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const maxSize = 100 * 1024 * 1024; // 100MB
    const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/avi', 'video/mov'];

    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a valid video file (MP4, WebM, OGG, AVI, MOV)';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 100MB';
    }

    return null;
  };

  const handleFileSelect = (file: File) => {
    setError(null);
    const validationError = validateFile(file);
    
    if (validationError) {
      setError(validationError);
      return;
    }

    setUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      onUpload(projectId, file);
      setUploading(false);
      onClose();
    }, 1000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-slate-800">
            {projectId === 'new' ? 'Add New Project with Video' : 'Upload Project Video'}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle size={16} />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <div
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            dragOver
              ? 'border-blue-400 bg-blue-50'
              : 'border-slate-300 hover:border-slate-400'
          } ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileInput}
            className="hidden"
          />

          {uploading ? (
            <div className="space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-slate-600">Uploading video...</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-blue-500">
                <Upload size={48} className="mx-auto mb-4" />
              </div>
              
              <div>
                <p className="text-lg font-medium text-slate-800 mb-2">
                  Drop your video here or click to browse
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  Supports MP4, WebM, OGG, AVI, MOV up to 100MB
                </p>
              </div>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
              >
                <File size={16} />
                Choose File
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-xs text-slate-500 space-y-1">
          <p>• Maximum file size: 100MB</p>
          <p>• Supported formats: MP4, WebM, OGG, AVI, MOV</p>
          <p>• Videos will be displayed in your portfolio</p>
        </div>
      </div>
    </div>
  );
}