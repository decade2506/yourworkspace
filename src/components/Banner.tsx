'use client'
import { useState } from "react";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'brandpic/office/office10.jpg',
        'brandpic/office/office10.jpg',
        'brandpic/office/office10.jpg',
    ];
    const nextslide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevslide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className="relative w-full h-[225px] md:h-[400px] lg:h-[420px] xl:h-[680px] xxl:h-[900px] overflow-hidden z-0">
            {/* images Container */}
            <div className="flex w-full h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index)=> (
                    <img src={image} key={index} className="absolute top-0 left-0 w-full object-cover" style={{left: `${index * 100}%`}} />
                ))}
            </div>
            {/* Navigation buttons */}
            <button
                onClick={prevslide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-6"
            >
                &larr;
            </button>
            <button
                onClick={nextslide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-6"
            >
                &rarr;
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 m-2 rounded-full ${
                            currentIndex === index ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Banner;