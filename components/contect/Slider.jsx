import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Slider() {
  const sliderEvent = [
    {
      title: "test-1-e",
      img: "https://cdn.pixabay.com/photo/2024/03/07/10/30/mushrooms-8618284_640.jpg",
    },
    {
      title: "test-2-e",
      img: "https://cdn.pixabay.com/photo/2024/03/08/16/06/building-8621170_640.jpg",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  return (
    <div>
      <div className=" mt-10  ">
        <ul className="flex mt-1 overflow-x-auto justify-center ">
          {sliderEvent ? (
            sliderEvent.slice(startIndex, startIndex + 1).map((item, index) => (
              <li
                key={index}
                className="mx-2 flex flex-col items-center border-4 px-10 py-4  border-slate-300 w-auto"
                id={`item_${item.id || index}`}
              >
                <Image
                  width={1000}
                  height={100}
                  alt={item.title}
                  src={item.img}
                  className="object-cover  h-96"
                />
                <p className="mt-2 text-xl  w-full p-2  text-[#ffd900]  text-center">
                  {item.title}
                </p>
              </li>
            ))
          ) : (
            <div>.......Loading......</div>
          )}
        </ul>

        {sliderEvent && sliderEvent.length > 1 && (
          <div className="flex justify-center mt-2 ">
            {[...Array(Math.ceil(sliderEvent.length / 1)).keys()].map((num) => (
              <button
                key={num}
                onClick={() => setStartIndex(num * 1)}
                className={`mx-1 p-2 rounded-full focus:outline-none ${
                  startIndex === num * 1
                    ? "bg-[#ffd900] text-white  border-black border "
                    : "bg-gray-200 border-black border"
                }`}
              >
                {""}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
