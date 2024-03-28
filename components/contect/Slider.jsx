import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import Image from 'next/image'
export default function Slider ()  {

        const slider = [
            {
               img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            },
            {
              img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
           },
           {
             img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
           },

        ]

    return (
        <Carousel transition={{ duration: 2 }} className="rounded-xl h-48 sm:h-[600px]" autoplay='true' loop='true'>
            {slider.map((item , index) => (
              <Image 
              key={index}
              src={item.img}
              width={`${500000}`}
              height={100}
              className="h-full w-full object-cover"
              alt="test"
              />

            ))}
        </Carousel> 
      );
    }