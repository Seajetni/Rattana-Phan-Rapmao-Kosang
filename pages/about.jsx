import Slider from "@/components/about/Slider";
import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function about() {

  const ทำไมต้องเชี่ยวชาญแนว = [
    {
      id: "1",
      img: "/1.png",
      name: "จุดเริ่มต้นของความมั่งคั่งของธุรกิจ เกิดจาก",
      title: "ความสัมพันธ์อันดีงามระหว่างคุณและลูกค้า",
      detail:
         ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat
        sint totam autem ipsum illo vitae sequi animi odio dolorem quas, porro
        labore odit nam fugiat omnis corporis qui rem? Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Possimus nisi, veniam voluptatem
        nobis quisquam accusamus iure harum quia saepe quaerat tempore optio
        molestiae molestias corrupti rerum itaque aperiam? Quae, eaque? Dicta
        est modi, consequatur ut rerum molestias iure! Et tempore quae vitae
        optio necessitatibus pariatur animi temporibus, asperiores doloribus
        molestias placeat aliquid iste dolor, quo distinctio quibusdam quasi
        alias aliquam! Suscipit deleniti officia non velit! Unde quaerat`,
    },
    {
      id: "1",
      img: "/1.png",
      name: "จุดเริ่มต้นของความมั่งคั่งของธุรกิจ เกิดจาก",
      title: "ความสัมพันธ์อันดีงามระหว่างคุณและลูกค้า",
      detail:
      ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat
     sint totam autem ipsum illo vitae sequi animi odio dolorem quas, porro
     labore odit nam fugiat omnis corporis qui rem? Lorem ipsum dolor sit
     amet consectetur, adipisicing elit. Possimus nisi, veniam voluptatem
     nobis quisquam accusamus iure harum quia saepe quaerat tempore optio
     molestiae molestias corrupti rerum itaque aperiam? Quae, eaque? Dicta
     est modi, consequatur ut rerum molestias iure! Et tempore quae vitae
     optio necessitatibus pariatur animi temporibus, asperiores doloribus
     molestias placeat aliquid iste dolor, quo distinctio quibusdam quasi
     alias aliquam! Suscipit deleniti officia non velit! Unde quaerat`,
    },
  ];

  return (
    <Layout>
      <div  className="flex justify-center  mt-10">
        <h1 className=" text-2xl ">เกี่ยวกับเรา</h1>
      </div>

      <div className=" mx-10 sm:mx-20 my-10">
        <p className=" text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat
          sint totam autem ipsum illo vitae sequi animi odio dolorem quas, porro
          labore odit nam fugiat omnis corporis qui rem? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Possimus nisi, veniam voluptatem
          nobis quisquam accusamus iure harum quia saepe quaerat tempore optio
          molestiae molestias corrupti rerum itaque aperiam? Quae, eaque? Dicta
          est modi, consequatur ut rerum molestias iure! Et tempore quae vitae
          optio necessitatibus pariatur animi temporibus, asperiores doloribus
          molestias placeat aliquid iste dolor, quo distinctio quibusdam quasi
          alias aliquam! Suscipit deleniti officia non velit! Unde quaerat
        </p>
      </div>

      <Slider />

      <div className="">
        <div>
          {ทำไมต้องเชี่ยวชาญแนว.map((item, index) => (
            <div key={index} className="mx-auto max-w-screen-xl px-4 py-8  ">
              <div className="  grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  ">
                <div
                  className={`   shadow-2xl  relative h-64 overflow-hidden  rounded-3xl ${
                    index % 2 === 1 ? "" : "lg:order-last"
                  } sm:h-80 lg:h-full`}
                >
               <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xyUmcRkQthk?si=8EWwVnGnLivIrbSm"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
                </div>

                <div className="lg:py-24">
                  <h3 className="text-2xl  font-semibold sm:text-2xl text-[#A8741A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 ">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </Layout>
  );
}
