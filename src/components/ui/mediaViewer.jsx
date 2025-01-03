"use client";
import React, { useState } from "react";
import NoMediaIcon from "@/components/icon/noMediaIcon";

const MediaViewer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    //implement image fetching urls from the backend
    // const images = [];
    const images = [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            alt: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            alt: "Pencils",
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            alt: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            alt: "Pencils",
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            alt: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            alt: "Pencils",
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            alt: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            alt: "Pencils",
        },
        {
            src: "/images/dog home.jpeg",
        },
        {
            src: "/images/Frame 11.png",
        },
    ];

    const openImage = (image) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

    return (
        <div>
            {/* Image Gallery */}
            {images.length === 0 && (
                <div className="p-6 text-center">
                    <div className="flex flex-col items-center ">
                        <NoMediaIcon />
                    </div>
                    <p className="font-bold text-lg p-3">No Media Found</p>
                    <p>Oops! Looks like this event has no media for now</p>
                </div>
            )}
            {images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                    {/* <div className="grid grid-auto-cols  gap-4 "> */}
                    {images.map((image, index) => (
                        <img
                            className="w-full h-full max-h-44 object-cover cursor-pointer rounded-lg shadow-md"
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            onClick={() => openImage(image)}
                        />
                    ))}
                </div>
            )}
            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-slate-900 bg-opacity-90"
                    // onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-md"
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl cursor-pointer bg-black rounded-full w-10 h-10 hover:bg-red-500"
                        >
                            &times; {/* x */}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MediaViewer;
