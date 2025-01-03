"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import UploadIcon from "@/components/icon/uploadIcon";

const FileUploader = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploading, setUploading] = useState(false);

    const dropzone = useDropzone({
        onDrop: (acceptedFiles) => {
            const newFiles = acceptedFiles.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
                uploaded: false,
            }));
            setSelectedFiles((prev) => [...prev, ...newFiles]);
        },
        validation: {
            accept: {
                "image/*": [".png", ".jpg", ".jpeg"],
            },
            maxSize: 10 * 1024 * 1024,
            maxFiles: 10,
        },
    });

    const handleUpload = async () => {
        setUploading(true);
        try {
            const unuploadedFiles = selectedFiles.filter(
                (file) => !file.uploaded
            );

            for (const fileObj of unuploadedFiles) {
                // Replace this with actual upload logic when the backend is connected
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Update file status after successful upload
                setSelectedFiles((prev) =>
                    prev.map((f) =>
                        f === fileObj ? { ...f, uploaded: true } : f
                    )
                );
            }
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setUploading(false);
            setSelectedFiles([]); //to refresh the page and make the uploaded files disappear
        }
    };

    const removeFile = (indexToRemove) => {
        setSelectedFiles((prev) => {
            const newFiles = prev.filter((_, index) => index !== indexToRemove);
            // Cleaning up the URL object to prevent memory leaks
            URL.revokeObjectURL(prev[indexToRemove].preview);
            return newFiles;
        });
    };

    return (
        <div className="space-y-4">
            <div
                {...dropzone.getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400"
            >
                <div className="flex flex-col items-center">
                    <UploadIcon />
                </div>
                <input {...dropzone.getInputProps()} />
                <p className="font-bold text-lg p-3">Upload Media</p>
                <p>Drag & drop images here, or click to select files</p>
            </div>
            {/* {selectedFiles.length > 0 && ( */
            /* this is to show the button only when files are selected */}
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    {selectedFiles.map((fileObj, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={fileObj.preview}
                                alt="preview"
                                className="w-full h-32 lg:h-64 object-cover rounded-lg border-2"
                            />
                            {fileObj.uploaded && (
                                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                    Uploaded
                                </div>
                            )}
                            <button
                                onClick={() => removeFile(index)}
                                className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                title="Remove image"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <Button
                    onClick={handleUpload}
                    variant="ghost"
                    disabled={
                        uploading || selectedFiles.every((f) => f.uploaded)
                    }
                    className="w-full rounded-3xl py-6 text-lg bg-mint-500 hover:bg-mint-700 font-bold"
                >
                    {uploading ? "Uploading..." : "Upload"}
                </Button>
            </div>
            {/* // )} */}
        </div>
    );
};

export default FileUploader;
