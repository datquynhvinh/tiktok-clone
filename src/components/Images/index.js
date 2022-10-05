import { useState, forwardRef } from 'react';
import images from '../../assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handlError = () => {
        setFallBack(images.noImage);
    };

    return <img ref={ref} src={fallBack || src} alt={alt} { ...props } onError={handlError} />;
});

export default Image;