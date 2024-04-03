import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
export default function Card() {
  const [hit, setHit] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/data");
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setHit(res.data[randomIndex]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getData();
  
    const interval = setInterval(getData, 5 * 60 * 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  
  return (
    <div className="flex justify-center  my-10 sm:mx-10">
      <ul className="grid-cols-1   ">
        {hit && (
          <li  className=" my-1 mx-2  w-screen ">
            <Link
              href="/products"
              className="group  h-full relative block bg-black m-1 rounded-3xl "
            >
              <Image
                width={`${10000000}`}
                height={100}
                alt={hit.name}
                src={hit.img}
                className="absolute inset-0 h-full   rounded-3xl w-full object-cover bg-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  กิจกรรม
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {hit.name}
                </p>

                <div className=" text-end  relative     items-end w-full flex flex-col  top-72    ">
                  <p className=" rounded-lg bg-[#A77419] px-5 py-3 font-medium text-white sm:w-auto ">
                    รายละเอียด
                  </p>
                </div>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white w-3/4">{hit.details}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
