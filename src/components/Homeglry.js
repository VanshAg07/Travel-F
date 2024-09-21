import React, { useRef, useState } from 'react';
import './Homeglry.css';
import Image1  from '../img/dubai.jpg';

const images = [
    { src: Image1, alt: 'Image 1' },
    { src: Image1, alt: 'Image 2' },
    { src: Image1, alt: 'Image 3' },
    { src: Image1, alt: 'Image 4' },
    { src: Image1, alt: 'Image 5' },
    { src: Image1, alt: 'Image 6' },
    { src: Image1, alt: 'Image 7' },
    { src: Image1, alt: 'Image 8' },
    { src: Image1, alt: 'Image 9' },
    { src: Image1, alt: 'Image 10' },
    { src: Image1, alt: 'Image 11' },
    { src: Image1, alt: 'Image 12' },
    { src: Image1, alt: 'Image 13' },
    { src: Image1, alt: 'Image 14' },
    { src: Image1, alt: 'Image 15' },
    { src: Image1, alt: 'Image 16' },
];

const Gallery = () => {
    const galleryCenterRef = useRef(null);
    const [rotation, setRotation] = useState(0);

    const handleWheel = (event) => {
        setRotation((prevRotation) => prevRotation + (event.deltaY < 0 ? -10 : 10));
    };

    return (
        <div className="gallery-wrap" onWheel={handleWheel}>
            <div
                className="gallery-center"
                ref={galleryCenterRef}
                style={{
                    transform: `translate(-50%, -50%) perspective(2500px) rotateY(${rotation}deg)`,
                }}
            >
                {images.map((image, index) => (
                    <div className="gallery-box" key={index} style={{
                        transform: `translate(-50%, -50%) rotateY(${index * -30}deg) translateZ(-1000px)`,
                    }}>
                        <a>
                            <img src={image.src} alt={image.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;