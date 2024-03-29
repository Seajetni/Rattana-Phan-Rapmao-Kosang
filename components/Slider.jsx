import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';

export default function Slider({ slider }) {
    return (
        <Carousel transition={{ duration: 2 }} className="rounded-xl h-48 sm:h-[600px]" autoplay loop>
            {slider.map((item, index) => (
                <div key={index} className="relative h-full w-full">
                    <Image 
                        src={item.img}
                        layout="fill"
                        objectFit="cover"
                        alt="Slider Image"
                    />
                </div>
            ))}
        </Carousel> 
    );
}
