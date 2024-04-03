import { Carousel } from '@material-tailwind/react';
import  axios  from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Slider() {

    const [slider , setSlider ] = useState([])


    useEffect(() => {
        const getData =  async () => {
            const res = await axios.get('/api/dataHome')
            setSlider(res.data)
        }
        getData()
    })


    return (
        <Carousel  className="rounded-xl h-48 sm:h-[600px]" autoplay loop>
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
