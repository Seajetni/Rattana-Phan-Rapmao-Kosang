import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTransition, animated, config } from 'react-spring';
import axios from "axios";

export default function Product() {
    const [startIndex, setStartIndex] = useState(0);
    const [content, setContent] = useState([]);
    const itemsPerPage = 15;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/data');
                setContent(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();


    
    }, []);

   

    const transitions = useTransition(
        content.slice(startIndex, startIndex + itemsPerPage),
        {
            trail: 400,
            from: { opacity: 0, transform: 'translateY(300px)' },
            enter: { opacity: 1, transform: 'translateY(0px)' },
            config: config.slow,
        }
    );

    return (
        <div className="flex flex-col items-center my-10">
            <div>
                <ul className="bg-white px-10 py-2 rounded-xl mt-2">
                    {transitions((style, item) => (
                        <animated.li style={style} key={item.id}>
                            <div
                                className="lg:flex bg-white text-[#A8741A] rounded-xl mb-2 h-[250px]"
                               
                            >
                                <Image
                                    src={item.img}
                                    alt="condo"
                                    priority
                                    width={500}
                                    height={100}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="lg:w-full mx-10 my-10">
                                    <div className="h-full lg:w-[600px]">
                                        <div className="h-full flex justify-center items-center">
                                            <p>{item.details}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <hr className="mb-1" />
                        </animated.li>
                    ))}
                </ul>
            </div>
            {content.length > itemsPerPage && (
                <div className="mt-2 flex justify-end lg:right-96 relative w-full">
                    {[...Array(Math.ceil(content.length / itemsPerPage)).keys()].map((page) => (
                        <button
                            key={page}
                            onClick={() => setStartIndex(page * itemsPerPage)}
                            className={`mx-1 px-2 rounded-full focus:outline-none ${
                                startIndex === page * itemsPerPage
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300"
                            }`}
                        >
                            {page + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
